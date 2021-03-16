const router = require("express").Router()
const controller = require("../controllers/Post")
const authUtils = require("../utils/auth")

router.param("id", controller.params)

router
  .route("/")
  .get(controller.getAll)
  .post(authUtils.isAdmin, controller.create)

router
  .route("/:id")
  .get(controller.getOne)
  .post(authUtils.isAdmin, controller.update)
  .delete(authUtils.isAdmin, controller.delete)

module.exports = router
