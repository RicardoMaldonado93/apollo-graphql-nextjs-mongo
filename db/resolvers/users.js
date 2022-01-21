const User = require("../models/user");
const bcryptjs = require("bcryptjs");

const userResolvers = {
  Query: {
    getUsers: () => "some user",
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
  },
};

module.exports = userResolvers;
