//Load Dep
const express = require('express')
const mongoose = require('mongoose')

//require and initalize dotenv
require('dotenv').config()

//PORT conf
const PORT = process.env.PORT

//Initalize express
const app = express()
app.use(express.json()); 

//Database Configuration
const db = require('./config/db')

//listen on port
app.listen(PORT, () => console.log(`running on port: ${PORT}`))


//import routes
const authRouter = require('./routes/AuthRouter')

//mount routes
app.use('/auth', authRouter)