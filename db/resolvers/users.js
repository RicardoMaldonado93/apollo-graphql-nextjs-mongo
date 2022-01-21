
const userResolvers = {
  Query:{
    getUsers: () => "some user"
  },
  Mutation:{
    newUser: (_,{input})=> {
      console.log(input);
      
      return "user created ..."
    }
  }
};

module.exports = userResolvers;
