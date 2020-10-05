const { register } = require('./controllers/authCntroller')
const port = process.env.PORT || 5000
const express = require('express')
const authRoute = require('./routes/auth')
const tables = require('./model/Table')
const addSome = require('./routes/TestMaksym')

const bodyParser = require('body-parser')
const app = express()

app.use(require('morgan')('dev'))
// app.use(require('cors')())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoute)
app.use("/api/table", tables, addSome)

module.exports = app

app.listen(5000, () => console.log(`Server started on ${port}`))