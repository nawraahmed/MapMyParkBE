//Load Dep
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')

//require and initalize dotenv
require('dotenv').config()

//PORT conf
const PORT = process.env.PORT

//Initalize express
const app = express()
app.use(express.json())

// Middleware
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Theme Park API!')
})

//Database Configuration
const db = require('./config/db')

//listen on port
app.listen(PORT, () => console.log(`running on port: ${PORT}`))

//import routes
const authRouter = require('./routes/AuthRouter')
const attractionRouter = require('./routes/attraction')
const ticketRoutes = require('./routes/ticket')

//mount routes
app.use('/auth', authRouter)
app.use('/attraction', attractionRouter)
app.use('/api/tickets', ticketRoutes)
