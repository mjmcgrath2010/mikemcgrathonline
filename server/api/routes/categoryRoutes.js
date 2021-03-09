const router = require('express').Router()
const controller = require('../controllers/Category')

router.route('/').get(controller.getAll)

module.exports = router
