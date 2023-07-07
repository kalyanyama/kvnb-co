const express = require("express")
const calculator = express.Router()
const database = require("../database/database")
const jwt = require("jsonwebtoken")


calculator.get('/', (req, res)=>{
    try {
        const headerKey = process.env.JWT_HEADER_KEY
        const secureKey = process.env.JWT_SECURE_KEY

        const headerBody = req.header(headerKey)
        const verify = jwt.verify(headerBody, secureKey)
        
        if (verify) {
            const sql = `SELECT * FROM cals_details ORDER BY id DESC `
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

calculator.post("/create", (req, res) => {
    try {

        const sqlCals = `INSERT INTO cals_details(cals_id, name, mobile, amount, status, ifdeleted) 
        VALUES ('${"CAL" + Math.floor(100000 + Math.random() * 999999)}', '${req.body.name}', '${req.body.mobile}',
        '${req.body.amount}', '', '')`

        database.query(sqlCals, (err, results) => {
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


module.exports = calculator