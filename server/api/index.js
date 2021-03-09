const router = require("express").Router()

const passport = require("./services/passport")
const apiRoutes = require("./routes/index")

router.use(passport)

router.use("/", apiRoutes)

module.exports = router
