const express = require("express")
const contact = express.Router()
const database = require("../database/database")
const jwt = require("jsonwebtoken")


contact.get('/', (req, res)=>{
    try {
        const headerKey = process.env.JWT_HEADER_KEY
        const secureKey = process.env.JWT_SECURE_KEY

        const headerBody = req.header(headerKey)
        const verify = jwt.verify(headerBody, secureKey)
        
        if (verify) {

            const sql = `SELECT * FROM contacted ORDER BY id DESC `
            database.query(sql, (err, results)=>{
                if (err) {
                    res.status(400).json({
                        success: false,
                        message: "Having internal issues",
                        err
                    })
                } else {
                    if (results.length == 0) {
                        res.status(400).json({
                            success: false,
                            message: "No-one contacted",
                        }) 
                    } else {
                        res.status(200).json({
                            success: true,
                            message: "Success",
                            results
                        })  
                    }
                }
            })
            
        } else {
            res.status(401).json({
                success: false,
                message: "invalidToken",
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal error",
            error
        }) 
    }
})
contact.post("/create", (req, res) => {
    try {

        const sql = `INSERT INTO contacted(contact_id, name, email, mobile, message, status, ifdeleted) 
        VALUES ('${"C" + Math.floor(100000 + Math.random() * 999999)}', '${req.body.name}', '${req.body.email}',
         '${req.body.mobile}', '${req.body.message}','','')`

        database.query(sql, (err, results) => {
            if (err) {
                res.status(400).json({
                    success: false,
                    message: "Having internal issues.",
                    err
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: "Successful",
                    results
                })
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal error",
            error
        })
    }

})


module.exports = contact