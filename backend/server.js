require("dotenv").config()
const app = require('./app')
const PORT = process.env.PORT

const server = app.listen(PORT, () =>{
    console.log("welcome to the server.")
})