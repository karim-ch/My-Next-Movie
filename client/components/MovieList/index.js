import React from 'react';
import MovieItem from '../MovieItem';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ContentLoader from '../ContentLoader';
import '../../style/MovieList.css';

export default function MovieList({ type }) {
  return (
    <Query query={NowPlayingQuery}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <div>
              <h2 className="playing-now">
                {type === 'now_playing'
                  ? 'Now Playing Movies'
                  : 'Top Rated Movies'}
              </h2>
              <ContentLoader />
            </div>
          );
        if (error) return <div>SERVER ERROR</div>;
        return (
          <div className="row p-2">
            <div className="col-12 p-4">
              {data.NowPlaying === '' ? (
                <h2 className="playing-now">No Film are being played now</h2>
              ) : (
                <h2 className="playing-now">
                  {type === 'now_playing'
                    ? 'Now Playing Movies'
                    : 'Top Rated Movies'}
                </h2>
              )}
            </div>
            {data.NowPlaying.map((movie, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                <MovieItem movie={movie} />
              </div>
            ))}
          </div>
        );
      }}
    </Query>
  );
}
const NowPlayingQuery = gql`
  {
    NowPlaying {
      id
      title
      poster_path
      vote_average
    }
  }
`;
