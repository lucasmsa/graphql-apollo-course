const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const { TrackAPI } = require("./datasources/trackAPI");

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;

      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache })
        }
      };
    }
  });

  console.log(`
    🥋 Apollo Server is running
    🕸️ Query Requests at ${url}
  `);
}

startApolloServer();
