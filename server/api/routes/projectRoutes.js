const router = require("express").Router()
const controller = require("../controllers/Project")

router.route("/").get(controller.getAll)

module.exports = router
