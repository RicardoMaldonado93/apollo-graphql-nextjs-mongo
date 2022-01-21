const { ApolloServer } = require("apollo-server");
const typeDefs = require("./db/schemas/users");
const resolvers = require("./db/resolvers/users");
const connectToDB = require('./config/db');

// connect to db
connectToDB();

// server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// run server
server.listen().then(({ url }) => console.log(`server run in ${url}`));
