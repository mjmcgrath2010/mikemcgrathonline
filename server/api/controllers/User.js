const User = require("../models/User.js")

exports.params = (req, res, next, id) => {
  User.findById(id)
    .then((doc) => {
      req.userQuery = doc
      req.id = id
      next()
    })
    .catch((e) => next(e))
}

exports.getOne = (req, res) => res.json(req.userQuery)

exports.getAll = (req, res, next) =>
  User.find({})
    .then((docs) => res.json(docs))
    .catch((e) => next(e))

exports.create = (req, res, next) => {
  const { admin, email, name, password, username } = req.body

  const user = new User({ admin, email, name, password, username })

  user
    .save()
    .then((u) => res.json(u))
    .catch((e) => next(e))
}

exports.update = (req, res, next) => {}

exports.delete = (req, res, next) => {}
