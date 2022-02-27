// schemas
const usersTypeDefs = require('./schemas/users')
const productsTypeDefs = require('./schemas/products')
const clientsTypeDefs = require('./schemas/clients')

// resolvers
const usersResolvers = require('./resolvers/users')
const productsResolvers = require('./resolvers/products')
const clientsResolvers = require('./resolvers/clients')

const resolvers = [usersResolvers, productsResolvers, clientsResolvers]

const typeDefs = [usersTypeDefs, productsTypeDefs, clientsTypeDefs]

module.exports = { typeDefs, resolvers }
