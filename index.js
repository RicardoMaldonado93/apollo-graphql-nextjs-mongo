const { ApolloServer } = require("apollo-server");
const { productsResolvers, usersResolvers, usersTypeDefs } = require("./db");
const connectToDB = require("./config/db");

// connect to db
connectToDB();

// server
const server = new ApolloServer({
  typeDefs: [usersTypeDefs],
  resolvers: [productsResolvers, usersResolvers],
});

// run server
server.listen().then(({ url }) => console.log(`server run in ${url}`));
