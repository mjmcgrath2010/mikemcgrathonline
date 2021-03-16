const router = require("express").Router()
const controller = require("../controllers/Category")

router.param("id", controller.params)

router.route("/").get(controller.getAll)

module.exports = router
