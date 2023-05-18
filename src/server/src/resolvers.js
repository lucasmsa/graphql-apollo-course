const resolvers = {
  Query: {
    // returns an array of Tracks, used to populate the home grid
    tracksForHome: (_, __, contextValue) => {
      const {
        dataSources: { trackAPI }
      } = contextValue;

      return trackAPI.getTracksForHome();
    },
    track: async (_, args, contextValue) => {
      const { id } = args;
      const {
        dataSources: { trackAPI }
      } = contextValue;

      return trackAPI.getTrack(id);
    }
  },
  Track: {
    author: (parent, _, contextValue) => {
      const { authorId } = parent;
      const {
        dataSources: { trackAPI }
      } = contextValue;

      return trackAPI.getAuthor(authorId);
    },
    modules: (parent, _, contextValue) => {
      const { id } = parent;
      const {
        dataSources: { trackAPI }
      } = contextValue;

      return trackAPI.getTrackModules(id);
    }
  }
};

module.exports = {
  resolvers
};
