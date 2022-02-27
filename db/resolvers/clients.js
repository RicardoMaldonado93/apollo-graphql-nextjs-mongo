const Client = require("../models/clients");

const ClientResolver = {
  Query: {
    getClients: async () => {
      return Client.find({});
    },
    getClient: async (_, { id }) => {
      const clientExist = Client.findOne({ id });

      if (!clientExist) throw new Error("The Client not exist");

      return clientExist;
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
  },
};

module.exports = ClientResolver;
