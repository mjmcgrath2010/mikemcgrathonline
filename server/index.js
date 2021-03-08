const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const app = express()

app.use(express.static(path.resolve( "build")))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/ping", function (req, res) {
  return res.send("pong")
})

app.get("*", function (req, res) {
  res.sendFile(path.resolve( "build", "index.html"))
})

app.listen(process.env.PORT || 8080)
