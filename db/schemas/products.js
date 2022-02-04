const { gql } = require("apollo-server");

const typeProducts = gql`
  type Product {
    id: ID
    name: String
    stock: Number
    price: Number
    createAt: String
  }
`;

module.exports = typeProducts;