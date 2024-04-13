const express = require('express')
const cors = require('cors')
require("dotenv").config()

const PORT = process.env.PORT
const app = express()

app.use(cors())


app.listen(PORT, () =>{
    console.log("welcome to the server.")
})