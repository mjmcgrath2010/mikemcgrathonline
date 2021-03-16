const User = require("../models/User")

exports.login = (req, res, next) => {
  const { username, password } = req.body
  User.findOne({ username })
    .then((u) => {
      if (u) {
        return u
          .authenticate(password)
          .then((usr) => res.json(usr))
          .catch((e) => next(e))
      }
      return res.sendStatus(401)
    })
    .catch((e) => next(e))
}

exports.logout = (req, res, next) => {}
exports.checkAuth = (req, res, next) => {}
