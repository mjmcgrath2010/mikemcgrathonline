const Post = require("../models/Post.js")

exports.params = (req, res, next, id) => {
  Post.findById(id)
    .then((doc) => {
      req.post = doc
      req.id = id
      next()
    })
    .catch((e) => next(e))
}

exports.getOne = (req, res) => res.json(req.post)

exports.getAll = (req, res, next) =>
  Post.find({})
    .then((docs) => res.json(docs))
    .catch((e) => next(e))

exports.create = (req, res, next) => {
  const { title, description, tags, categories, html, json } = req.body
  const author = req.user.identifier()

  const post = new Post({
    author,
    title,
    description,
    tags,
    categories,
    html,
    json,
  })
}

exports.update = (req, res, next) => {}

exports.delete = (req, res, next) => {}
