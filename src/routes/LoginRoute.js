const express = require('express')
const controller = require('../controller/LoginController')
const router = express.Router()

//login
router.get('/signin', controller.signin)
router.get('/logoff', controller.logoff)

module.exports = router