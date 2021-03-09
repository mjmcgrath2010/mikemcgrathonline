const { Schema, model } = require("mongoose")

const Post = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rawContent: {
    type: String,
  },
  html: {
    type: String,
  },
})

module.exports = model("post", Post)
