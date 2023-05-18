const { RESTDataSource } = require("@apollo/datasource-rest");

class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get("tracks");
  }

  getTrack(trackId) {
    return this.get("track/" + encodeURIComponent(trackId));
  }

  getAuthor(authorId) {
    return this.get("author/" + encodeURIComponent(authorId));
  }

  getTrackModules(trackId) {
    return this.get("track/" + encodeURIComponent(trackId) + "/modules");
  }
}

module.exports = {
  TrackAPI
};
