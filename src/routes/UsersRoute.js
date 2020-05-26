const express = require('express')
const userController = require('../controller/UserController')

const router = express.Router()

router.get('/userList',  userController.userList)
router.get('/userExist',  userController.userExist)
router.get('/userCreate',  userController.userCreate)

module.exports = router