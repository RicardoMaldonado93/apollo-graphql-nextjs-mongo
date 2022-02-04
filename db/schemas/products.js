const { gql } = require("apollo-server");

const typeProducts = gql`
  type Product {
    id: ID
    name: String
    stock: Int
    price: Float
    createAt: String
  }

  input ProductInput{
    name: String!
    stock: Int!
    price: Float!
    createAt:String
  }

  type Mutation {
    newProduct(input: ProductInput) : Product
  }
`;

module.exports = typeProducts;
