const { ApolloServer } = require("apollo-server");
const typeDefs = require("./db/schemas/curses");
const resolvers = require("./db/resolvers/curses");

//? server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//? run server
server.listen().then(({ url }) => console.log(`server run in ${url}`));
