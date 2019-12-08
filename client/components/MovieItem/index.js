import React from 'react';
import { Link } from 'react-router-dom';
import BeautyStars from 'beauty-stars';

export default function FilmItem({ movie }) {
  const average = average_on_five(movie.vote_average);
  return (
    <Link style={{ textDecoration: 'none' }} to={'/details/' + movie.id}>
      <div
        className="movie-data"
        style={{
          backgroundImage: `url(${movie.poster_path})`,
          backgroundSize: 'cover'
        }}
      >
        <div className="movie-overlay">
          <div>{movie.title}</div>
          <BeautyStars value={average} />
          <div>{`${average}/5`}</div>
        </div>
      </div>
    </Link>
  );
}

function average_on_five(vote_average) {
  const n = parseInt(vote_average);
  const vote_5 = (n / 10) * 5;
  return Math.round(vote_5 * 2) / 2;
}
