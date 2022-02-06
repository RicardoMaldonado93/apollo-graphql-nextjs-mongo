const products = require("../models/products");
const Product = require("../models/products");

const ProductResolver = {
  Query: {
    getProducts: async () => {
      try {
        return Product.find({});
      } catch (error) {
        console.error(error);
      }
    },
    getProduct: async (_, { id }) => {
      const existProduct = await Product.findById(id);

      if (!existProduct) throw new Error("Product not exist!");

      return existProduct;
    },
  },
  Mutation: {
    newProduct: async (_, { input }) => {
      try {
        const newProduct = new Product(input);

        return newProduct.save();
      } catch (error) {
        console.error(error);
      }
    },
    updateProduct: async (_, { id, input }) => {
      const existProduct = await Product.findById(id);

      if (!existProduct) throw new Error("Product not exist!");

      return Product.findByIdAndUpdate({ _id: id }, input, { new: true });
    },
  },
};

module.exports = ProductResolver;
