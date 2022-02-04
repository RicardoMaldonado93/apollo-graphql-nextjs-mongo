const Product = require("../models/products");

const ProductResolver = {
  Mutation: {
    newProduct: async (_, { input }) => {
      try {
        const newProduct = new Product(input);

        return newProduct.save();
      } catch (error) {
        console.error(error);
      }
    },
  },
};

module.exports = ProductResolver;
