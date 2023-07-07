const express = require("express")
const admin = express.Router()
const database = require("../database/database")
const jwt = require("jsonwebtoken")

admin.get("/auth", (req, res) => {
    try {
        const headerKey = process.env.JWT_HEADER_KEY
        const secureKey = process.env.JWT_SECURE_KEY

        const headerBody = req.header(headerKey)
        const verify = jwt.verify(headerBody, secureKey)

        if (verify) {

            const sqlAuth = `SELECT * FROM admin WHERE admin_id='${verify.admin_id}'`

            database.query(sqlAuth, (err, results) => {
                if (err) {
                    res.status(400).json({
                        success: false,
                        message: "Having internal issues.",
                        err
                    })
                } else {
                    if (results.length == 0) {
                        res.status(400).json({
                            success: false,
                            message: "There is no user regstered on Details."
                        })
                    } else {
                        res.status(200).json({
                            success: true,
                            message: "auth successful",
                            results
                        })
                    }
                }
            })



        } else {
            res.status(401).json({
                success: false,
                message: "invalidKeys"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal issues",
            error
        })
    }
})

admin.post("/login", (req, res) => {
    try {

        const sqlLogin = `SELECT * FROM admin WHERE admin_mobile='${req.body.username}' OR admin_email='${req.body.username}' AND admin_password='${req.body.password}' `

        database.query(sqlLogin, (err, results) => {
            if (err) {
                res.status(400).json({
                    success: false,
                    message: "Having internal issues.",
                    err
                })
            } else {
                if (results.length == 0) {
                    res.status(400).json({
                        success: false,
                        message: "There is no user regstered on Details."
                    })
                } else {

                    if (results[0].admin_password == req.body.password) {
                        const admin = {
                            time: new Date(),
                            admin_id: results[0].admin_id
                        }
                        const token = jwt.sign(admin, process.env.JWT_SECURE_KEY)
                        res.status(200).json({
                            success: true,
                            message: "Login successful",
                            results,
                            token
                        })
                    } else {
                        res.status(400).json({
                            success: false,
                            message: "incorrect password",
                        })
                    }

                }
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


module.exports = admin