const Product = require('../models/products')

const findIfProductExists = async (id) => {
  const product = await Product.findById(id)

  if (!product) throw new Error('Product not exist!')

  return product
}

const ProductResolver = {
  Query: {
    getProducts: async () => {
      return Product.find({})
    },
    getProduct: async (_, { id }) => {
      return findIfProductExists(id)
    },
  },
  Mutation: {
    newProduct: async (_, { input }) => {
      try {
        const newProduct = new Product(input)

        return newProduct.save()
      } catch (error) {
        console.error(error)
      }
    },
    updateProduct: async (_, { id, input }) => {
      return (
        (await findIfProductExists(id)) &&
        Product.findByIdAndUpdate({ _id: id }, input, { new: true })
      )
    },

    removeProduct: async (_, { id }) => {
      return (
        (await findIfProductExists(id)) &&
        (await Product.findByIdAndDelete(id)) &&
        'Product has been deleted!'
      )
    },
  },
}

module.exports = ProductResolver
