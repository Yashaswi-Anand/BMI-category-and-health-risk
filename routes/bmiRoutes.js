const express = require('express')
const { addUserData, getUserData, noOfOverweight } = require('../controller/bmiController')
const route = express.Router()

// add person data
route.post('/adduserData', addUserData)

// get all people details
route.get('/bmi', getUserData)

// get overweighted people
route.get('/noOfOverweightedPeople', noOfOverweight)

module.exports = route