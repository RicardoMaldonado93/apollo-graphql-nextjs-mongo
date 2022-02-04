const { gql } = require("apollo-server");

const typeUsers = gql`
  type User {
    id: ID
    name: String
    lastname: String
    email: String
    createAt: String
  }

  type Token{
    token: String
  }

  input UserInput {
    name: String!
    lastname: String!
    email: String!
    password: String!
  }

  input AuthInput{
    email: String!
    password: String!
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    newUser(input: UserInput): User
    authUser(input: AuthInput): Token
  }
`;

module.exports = typeUsers;
