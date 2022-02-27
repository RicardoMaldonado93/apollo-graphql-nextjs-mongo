const { gql } = require("apollo-server");

const typeClients = gql`
  type Client {
    id: String
    name: String
    lastname: String
    email: String
    phone: String
    seller: ID
    createAt: String
  }

  input ClientInput {
    id: String!
    name: String!
    lastname: String!
    email: String!
    phone: String
  }

  type Mutation {
    newClient(input: ClientInput): Client,
    updateClient(id:String!, input: ClientInput!): Client
    removeClient(id:String!): String
  }

  type Query {
    getClients: [Client],
    getClient(id: String!): Client,
    getClientsBySeller: [Client]
  }
`;

module.exports = typeClients;
