const Project = require('../models/Project.js')

exports.params = (req, res, next, id) => {
    Project.findById(id).then((doc) => {
      req.project = doc
      req.id = id
      next()
    }).catch(e => next(e))
}

exports.getOne = (req, res) => res.json(req.project)

exports.getAll = (req, res, next) => Project.find({}).then(docs => res.json(docs)).catch(e => next(e))


exports.create = (req, res, next) => {}

exports.update = (req, res, next) => {}

exports.delete = (req, res, next) => {}
