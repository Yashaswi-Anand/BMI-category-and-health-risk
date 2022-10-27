const express = require('express')
const { addUserData, getUserData } = require('../controller/bmiController')
const route = express.Router()

// add person data
route.post('/adduserData', addUserData)

// get all people details
route.get('/bmi', getUserData)

module.exports = route