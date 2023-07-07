const express = require("express")
const cors = require("cors")
const env = require("dotenv")
const app = express()

const contact = require("./controllers/contact")
const calculator = require("./controllers/Calculator")
const admin = require("./controllers/admin")

app.use(cors({origin : "*"}))
env.config()

app.listen(process.env.PORT || 3200, ()=>{
    console.log("server listening at 3200")
})

app.use(express.json())

app.use('/contact', contact)
app.use('/calculator', calculator)
app.use('/admin', admin)