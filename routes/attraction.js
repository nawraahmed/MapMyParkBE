//Express Module
const express = require('express')

//invoke router functionaility
const router = express.Router()

//Controller
const attractionCtrl = require('../controllers/attraction')

//Routes
router.get('/index', attractionCtrl.GetAttractions)

//Export the router
module.exports = router
