const express = require('express')
const { getData, addData } = require('../controller/bmiController')
const route = express.Router()

// add data
route.post('/addData', addData)

// get all data
route.get('/bmi', getData)

module.exports = route