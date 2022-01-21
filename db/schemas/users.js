const { gql } = require("apollo-server");

const typeUsers = gql`
  type User {
    id: ID
    name: String
    lastname: String
    email: String
    createAt: String
  }

  input UserInput {
    name: String!
    lastname: String!
    email: String!
    password: String!
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    newUser(input: UserInput): String
  }
`;

module.exports = typeUsers;
