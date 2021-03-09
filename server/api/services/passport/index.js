const passport = require("passport")
const User = require("../../models/User")

module.exports = (req, res, next) => {
  /* PASSPORT LOCAL AUTHENTICATION */
  passport.use(User.createStrategy())
  passport.serializeUser(User.serializeUser())
  passport.deserializeUser(User.deserializeUser())
  next()
}
