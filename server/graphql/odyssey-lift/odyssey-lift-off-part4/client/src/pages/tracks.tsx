import React from "react";
import { Layout } from "../components";
import QueryResult from "../components/query-result";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
import type { Track } from "../__generated__/graphql";

/** TRACKS gql query to retrieve all tracks */
export const TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track: Track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
