const app = require('./app')
const { register } = require('./controllers/authCntroller')
app.use(require('morgan')('dev'))
app.use(require('cors')())
const port = process.env.PORT || 5000

app.listen(5000, () => console.log(`Server started on ${port}`))