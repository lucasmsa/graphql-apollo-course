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
  Mutation: {
    incrementTrackViews: async (_, args, contextValue) => {
      try {
        const { id } = args;
        const {
          dataSources: { trackAPI }
        } = contextValue;

        const updatedTrack = await trackAPI.incrementTrackViews(id);

        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track: ${id}`,
          track: updatedTrack
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
          track: null
        };
      }
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
