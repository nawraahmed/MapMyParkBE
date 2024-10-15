//Load Dep
const express = require('express')
const mongoose = require('mongoose')

//require and initalize dotenv
require('dotenv').config()

//PORT conf
const PORT = process.env.PORT

//Initalize express
const app = express()

//Database Configuration
const db = require('./config/db')

//listen on port
app.listen(PORT, () => console.log(`running on port: ${PORT}`))

//Import Routes
const attractionRouter = require('./routes/attraction')

//Mount Routes
app.use('/attraction', attractionRouter)
