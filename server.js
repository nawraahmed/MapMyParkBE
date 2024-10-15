//Load Dep
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

//require and initalize dotenv
require('dotenv').config()

//PORT conf
const PORT = process.env.PORT


//Initalize express
const app = express()
app.use(express.json()); 

// Enable CORS for specific origin
app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from the frontend


//Database Configuration
const db = require('./config/db')

//listen on port
app.listen(PORT, () => console.log(`running on port: ${PORT}`))


//import routes
const authRouter = require('./routes/AuthRouter')

//mount routes
app.use('/auth', authRouter)