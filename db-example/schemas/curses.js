const { gql } = require("apollo-server");

const typeCurses = gql`
  type Curse {
    title: String
  }

  type Techs {
    tech: String
  }

  input CurseInput {
    tech: String
  }

  type Query {
    getCurses: [Curse]
    getCurse(input:CurseInput!): [Curse]
    getTechs: [Techs]
  }
`;


module.exports = typeCurses;