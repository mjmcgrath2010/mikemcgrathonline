const router = require("express").Router()

const categoryRoutes = require("./categoryRoutes")
const postRoutes = require("./postRoutes")
const projectRoutes = require("./projectRoutes")
const tagRoutes = require("./tagRoutes")
const userRoutes = require("./userRoutes")

router.use("/category", categoryRoutes)
router.use("/post", postRoutes)
router.use("/project", projectRoutes)
router.use("/tag", tagRoutes)
router.use("/user", userRoutes)

module.exports = router
