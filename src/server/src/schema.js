const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    "Get the tracks array for the homepage"
    tracksForHome: [Track!]!
  }

  "Modules that teach about a subject"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "The author of a track or a module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = { typeDefs };
