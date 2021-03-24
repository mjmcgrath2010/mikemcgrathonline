require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const app = express()
const mongoose = require("mongoose")
const expressSession = require("express-session")({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
})

const { ApolloServer, gql } = require("apollo-server-express")

const api = require("./api")

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

db.on("error", console.error.bind(console, "connection error:"))

db.once("open", function () {})

app.use(express.static(path.resolve("build")))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// Parse application/json
app.use(bodyParser.json())
// Session middleware
app.use(expressSession)

server.applyMiddleware({ app, path: "/graphql" })

// API routes
app.use("/api", api)

// Let every other request be handled by the React client
app.get("*", function (req, res) {
  res.sendFile(path.resolve("build", "index.html"))
})

// TODO: implement generic error handling

app.listen(process.env.PORT || 8080)
