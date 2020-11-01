var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')

var sequelize = require('./db/index')
var indexRouter = require('./routes/index')
var userRouter = require('./routes/user')

var app = express()

// cors
app.use(cors())
app.use(logger('dev'))

// body-parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// cookie-parser
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', userRouter)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = app
