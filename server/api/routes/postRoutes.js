const router = require("express").Router()
const controller = require("../controllers/Post")

router.route("/").get(controller.getAll)

module.exports = router
