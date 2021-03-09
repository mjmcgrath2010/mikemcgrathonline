const router = require("express").Router()
const controller = require("../controllers/Tag")

router.route("/").get(controller.getAll)

module.exports = router
