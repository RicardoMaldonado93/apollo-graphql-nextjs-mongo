const User = require("../models/users");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (user, secret, expiresIn) => {
  const { id } = user;
  return jwt.sign({ id }, secret, { expiresIn });
};

const userResolvers = {
  Query: {
    getUsers: () => "some user",
    getUser: async (_, { token }) => {
      return jwt.verify(token, process.env.SECRET_TOKEN);
    },
  },
  Mutation: {
    newUser: async (_, { input }) => {
      console.log(input);
      const { email, password } = input;

      //check if the user exist
      const isUserExistent = !!(await User.findOne({ email }));
      if (isUserExistent) throw new Error("the user already exist.");

      // create hash for the user password
      const salt = await bcryptjs.genSalt(10);
      input.password = await bcryptjs.hash(password, salt);

      try {
        // save into DB
        const newUser = new User(input);
        newUser.save();
        return newUser;
      } catch (error) {}
    },

    authUser: async (_, { input }) => {
      const { email, password } = input;

      // check if the user exist
      const isUserExist = await User.findOne({ email });

      if (!isUserExist) throw new Error("Invalid credentials");

      // check if the correct password
      const isCorrectPassword = await bcryptjs.compare(
        password,
        isUserExist.password
      );

      if (!isCorrectPassword) throw new Error("Invalid crendentials");

      const { SECRET_TOKEN, EXPIRATION_TOKEN } = process.env;
      return {
        token: createToken(isUserExist, SECRET_TOKEN, EXPIRATION_TOKEN),
      };
    },
  },
};

module.exports = userResolvers;
