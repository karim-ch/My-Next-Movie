import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import BeautyStars from 'beauty-stars';
import { average_on_five } from '../../utils';
import '../../style/Details.css';

export default function Details(props) {
  const id = props.match.params.id;
  const { loading, error, data } = useQuery(query, { variables: { id } });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const average = average_on_five(data.movieDetails.vote_average);

  return (
    <Fragment>
      <div className="row">
        <header
          className="movie-details col-12"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255, 254, 248, 0.28), rgba(0, 0, 0, 0.8)), url("https://image.tmdb.org/t/p/w500///' +
              data.movieDetails.poster_path +
              '")'
          }}
        >
          <p className="back-icon">
            <a href="#" className="arrow left"></a>
          </p>
          <div>
            <h2 className="movie-details-title">{data.movieDetails.title}</h2>
            <h2>{data.movieDetails.genres}</h2>
          </div>
        </header>
      </div>
      <div className="row">
        <div className="col-lg-4 movie-photo-container col-md-6 col-sm-6">
          <div
            className="movie-photo"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255, 254, 248, 0.28), rgba(0, 0, 0, 0.8)), url("https://image.tmdb.org/t/p/w500///' +
                data.movieDetails.poster_path +
                '")'
            }}
          ></div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 movie-details-info-section">
          <div className="title-details-title">{data.movieDetails.title}</div>
          <div className="title-details-text">
            Produced by : {data.movieDetails.production_companies}.
          </div>
          <div className="title-details-text">
            Released on : {data.movieDetails.release_date}.
          </div>
          <div className="title-details-text">
            Runtime : {data.movieDetails.runtime} min.
          </div>
          <div className="title-details-text">
            Overview : {data.movieDetails.overview}
          </div>
          <BeautyStars value={average} />
          <div className="title-details-text">Average : {average} /5</div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </Fragment>
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
