import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import MovieItem from '../MovieItem';
import gql from 'graphql-tag';
import ContentLoader from '../ContentLoader';
import '../../style/MovieList.css';

export default function MovieList({ req }) {
  const { loading, error, data } = useQuery(query, { variables: { req } });
  if (loading) {
    return (
      <div>
        <h2 className="playing-now">
          {req === 'now_playing' ? 'Now Playing Movies' : 'Top Rated Movies'}
        </h2>
        <ContentLoader />
      </div>
    );
  }
  if (error) return <div>SERVER ERROR</div>;

  return (
    <div className="row p-2">
      <div className="col-12 p-4">
        {data.moviesList === [] ? (
          <h2 className="playing-now">No Film are being played now</h2>
        ) : (
          <h2 className="playing-now">
            {req === 'now_playing' ? 'Now Playing Movies' : 'Top Rated Movies'}
          </h2>
        )}
      </div>

      {data.moviesList.map((movie, i) => (
        <div key={i} className="col-lg-4 col-md-6 col-sm-6 mb-4">
          <MovieItem movie={movie} />
        </div>
      ))}
    </div>
  );
}

const query = gql`
  query MoviesList($req: String) {
    moviesList(req: $req) {
      id
      title
      poster_path
      vote_average
    }
  }
`;
