const router = require("express").Router()
const controller = require("../controllers/User")

router.route("/").get(controller.getAll)

module.exports = router
