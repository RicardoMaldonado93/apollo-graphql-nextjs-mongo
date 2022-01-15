const { gql } = require("apollo-server");

const typeCurses = gql`
  type Curse {
    title: String
  }

  type Techs {
    tech: String
  }

  type Query {
    getCurses: [Curse]
    getTechs: [Techs]
  }
`;


module.exports = typeCurses;