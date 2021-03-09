const { Schema, model } = require("mongoose")

const Project = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String,
  },
  images: {
    type: Array,
  },
})

module.exports = model("project", Project)
