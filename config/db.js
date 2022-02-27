const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
})

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.info('connected to database')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = connectToDB
