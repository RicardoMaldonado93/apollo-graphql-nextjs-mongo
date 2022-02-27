const { ApolloServer } = require('apollo-server')
const { resolvers, typeDefs } = require('./db')
const connectToDB = require('./config/db')
const jwt = require('jsonwebtoken')
// connect to db
connectToDB()

// server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || null

    if (token) {
      const user = jwt.verify(token, process.env.SECRET_TOKEN)
      return { user }
    }
  },
})

// run server
server.listen().then(({ url }) => console.log(`server run in ${url}`))
