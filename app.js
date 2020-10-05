const express = require('express')
const authRoute = require('./routes/auth')
const bodyParser = require('body-parser')

const app = express()


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoute)

module.exports = app