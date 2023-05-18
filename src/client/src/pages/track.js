import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import QueryResult from "../components/query-result";
import TrackDetail from "../components/track-detail";

export const GET_TRACK = gql`
  query GetTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`;

export function Track() {
  const { trackId } = useParams();
  const { data, loading, error } = useQuery(GET_TRACK, {
    variables: { trackId }
  });

  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
}
