const Category = require("../models/Category.js")

exports.params = (req, res, next, id) => {
  Category.findById(id)
    .then((doc) => {
      req.category = doc
      req.id = id
      next()
    })
    .catch((e) => next(e))
}

exports.getOne = (req, res) => res.json(req.category)

exports.getAll = (req, res, next) =>
  Category.find({})
    .then((docs) => res.json(docs))
    .catch((e) => next(e))

exports.create = (req, res, next) => {
  const { title, description } = req.body

  const category = new Category({ title, description })

  category
    .save()
    .then((doc) => res.json(doc))
    .catch((e) => next(e))
}

exports.update = (req, res, next) => {}

exports.delete = (req, res, next) => {}
