// schemas
const usersTypeDefs = require("./schemas/users");
const productsTypeDefs = require("./schemas/products");

// resolvers
const usersResolvers = require("./resolvers/users");
const productsResolvers = require("./resolvers/products");

module.exports = {
  usersTypeDefs,
  usersResolvers,
  productsTypeDefs,
  productsResolvers,
};
