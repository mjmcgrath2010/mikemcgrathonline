const router = require('express').Router()
const apiRoutes = require('./routes/index')

router.use('/', apiRoutes)

module.exports = router

