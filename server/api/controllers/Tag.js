const Tag = require('../models/Tag.js')

exports.params = (req, res, next, id) => {
    Tag.findById(id).then((doc) => {
      req.tag = doc
      req.id = id
      next()
    }).catch(e => next(e))
}

exports.getOne = (req, res) => res.json(req.tag)

exports.getAll = (req, res, next) => Tag.find({}).then(docs => res.json(docs)).catch(e => next(e))


exports.create = (req, res, next) => {}

exports.update = (req, res, next) => {}

exports.delete = (req, res, next) => {}
