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
  images: [
    {
      type: String,
    },
  ],
  json: {
    type: String,
  },
  html: {
    type: String,
  },
})

module.exports = model("project", Project)
