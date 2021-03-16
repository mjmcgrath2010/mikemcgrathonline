const { Schema, model } = require("mongoose")

const Post = new Schema({
  status: {
    type: String,
    enum: ["draft", "published", "deleted"],
    default: "draft",
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
  ],
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "tag",
      required: true,
    },
  ],
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  json: {
    type: String,
  },
  html: {
    type: String,
  },
})

Post.methods = {
  delete() {
    this.status = "deleted"
    return this.save()
  },
}

module.exports = model("post", Post)
