import React, { useState } from 'react';
import FilmItem from '../FilmItem';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default function NewFilms() {
  return (
    <Query
      query={gql`
        {
          NowPlaying {
            id
            title
            poster_path
            vote_average
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <div>LOADING</div>;
        if (error) return <div>SERVER ERROR</div>;
        return (
          <div className="row p-2">
            <div className="col-12 p-4">
              {data.NowPlaying === '' ? (
                <div>No Film are being played now</div>
              ) : (
                <h2 className="playing-now">Playing Now</h2>
              )}
            </div>
            {data.NowPlaying.map((movie, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                <FilmItem movie={movie} />
              </div>
            ))}
          </div>
        );
      }}
    </Query>
  );
}
