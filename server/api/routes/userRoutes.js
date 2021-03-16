const router = require("express").Router()
const controller = require("../controllers/User")
const authUtils = require("../utils/auth")

router.param("id", controller.params)

router
  .route("/")
  .get(authUtils.isAdmin, controller.getAll)
  .post(controller.create)

router
  .route("/:id")
  .get(authUtils.isLoggedIn, controller.getOne)
  .post(authUtils.isLoggedIn, controller.update)

module.exports = router
