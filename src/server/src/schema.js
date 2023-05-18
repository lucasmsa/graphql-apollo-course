const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    "Get the tracks array for the homepage"
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  "Modules that teach about a subject"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }

  "The author of a track or a module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  "Unit of teaching, multiple modules compose a track"
  type Module {
    id: ID!
    title: String!
    length: Int
  }
`;

module.exports = { typeDefs };
