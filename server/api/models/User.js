const { Schema, model } = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const User = new Schema({
  admin: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
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
})

User.plugin(passportLocalMongoose)

User.pre("save", function () {})

User.methods = {}

module.exports = model("user", User)
