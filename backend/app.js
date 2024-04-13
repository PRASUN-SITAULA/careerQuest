const express = require('express')
const cors = require('cors')

const app = express()

// middleware
app.use(cors())

const scrapeRouter = require('./routes/scrapeRoutes')

app.use('/api/v1',scrapeRouter)
module.exports = app