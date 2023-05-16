const resolvers = {
  Query: {
    // returns an array of Tracks, used to populate the home grid
    tracksForHome: (_, __, contextValue) => {
      const {
        dataSources: { trackAPI }
      } = contextValue;

      return trackAPI.getTracksForHome();
    }
  },
  Track: {
    author: (parent, _, contextValue) => {
      const { authorId } = parent;
      const {
        dataSources: { trackAPI }
      } = contextValue;

      return trackAPI.getAuthor(authorId);
    }
  }
};

module.exports = {
  resolvers
};
