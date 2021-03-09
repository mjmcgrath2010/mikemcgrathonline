const { Schema, model } = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const User = new Schema({
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
})

User.plugin(passportLocalMongoose)

User.pre("save", function () {})

User.methods = {}

module.exports = model("user", User)
