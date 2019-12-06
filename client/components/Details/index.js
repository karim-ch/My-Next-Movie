import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import '../../style/Details.css';

export default function Details(props) {
  const id = props.match.params.id;
  return (
    <Query query={query} variables={{ id }}>
      {({ loading, err, data }) => {
        if (loading) return <div>loading</div>;
        if (err) return <div>error</div>;
        return (
          <div>
            <div>
              <header
                className="movie-details"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(255, 254, 248, 0.28), rgba(0, 0, 0, 0.8)), url("https://image.tmdb.org/t/p/w500///' +
                    data.movieDetails.poster_path +
                    '")'
                }}
              >
                <h2>{data.movieDetails.title}</h2>
              </header>
            </div>
          </div>
        );
      }}
    </Query>
  );
}

const query = gql`
  query MovieDetails($id: String) {
    movieDetails(id: $id) {
      title
      overview
      poster_path
      genres
      release_date
      vote_average
      runtime
      production_companies
    }
  }
`;
