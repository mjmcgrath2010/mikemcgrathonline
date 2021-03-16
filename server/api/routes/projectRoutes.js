const router = require("express").Router()
const controller = require("../controllers/Project")
const authUtils = require("../utils/auth")

router.param("id", controller.params)

router.route("/").get(controller.getAll)

module.exports = router
