const Client = require("../models/clients");

const ClientResolver = {
  Query: {
    getClients: async () => {
      return Client.find({});
    },
    getClient: async (_, { id }, ctx) => {
      const client = await Client.findOne({ id });

      if (!client) throw new Error("The Client not exist");

      if (client.seller.toString() !== ctx.user.id)
        throw new Error("You've invalid credentials to continue");

      return client;
    },
    getClientsBySeller: async (_, {}, ctx) => {
      try {
        return Client.find({ seller: ctx.user.id.toString() });
      } catch (error) {
        console.error(error);
      }
    },
  },
  Mutation: {
    newClient: async (_, { input }, ctx) => {
      const { id } = input;
      const clientExist = await Client.findOne({ id });

      if (clientExist) throw new Error("The Client already exist!");

      try {
        const newClient = new Client(input);
        newClient.seller = ctx.user.id;

        return newClient.save();
      } catch {
        console.error("Error!");
      }
    },

    updateClient: async (_, { id, input }, ctx) => {
      // verify if the client exist
      const client = await Client.findOne({ id });

      if (!client) throw new Error("The client not exist");

      // verify if the use have valid credentials to edit
      if (ctx.user.id !== client.seller.toString())
        throw new Error(
          "You've invalid credentials to continue with the operation"
        );

      // save the changes
      return Client.findByIdAndUpdate({ _id: client._id }, input, {
        new: true,
      });
    },

    removeClient: async (_, { id }, ctx) => {
      
        const client = await Client.findOne({ id });
        if (!client) throw new Error("The client not exist");

      // verify if the use have valid credentials to edit
      if (ctx.user.id !== client.seller.toString())
        throw new Error(
          "You've invalid credentials to continue with the operation"
        );

      

      await Client.findByIdAndDelete({ _id: client._id });

              return "the client has been removed"
     
    },
  },
};

module.exports = ClientResolver;
