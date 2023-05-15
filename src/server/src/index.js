const { ApolloServer } = require("@apollo/server");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");

const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(4)]
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Explorer, Space kitten",
    author: () => {
      return {
        name: "Grumpson catter",
        photo:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg"
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 780,
    modulesCount: () => 3
  })
};

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks
    })
  });

  const { url } = await startStandaloneServer(server);
  console.log(`
    🥋 Apollo Server is running
    🕸️ Query Requests at ${url}
  `);
}

startApolloServer();
