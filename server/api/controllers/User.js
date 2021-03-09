const User = require('../models/User.js')

exports.params = (req, res, next, id) => {
    User.findById(id).then((doc) => {
      req.user = doc
      req.id = id
      next()
    }).catch(e => next(e))
}

exports.getOne = (req, res) => res.json(req.user)

exports.getAll = (req, res, next) => User.find({}).then(docs => res.json(docs)).catch(e => next(e))


exports.create = (req, res, next) => {}

exports.update = (req, res, next) => {}

exports.delete = (req, res, next) => {}
