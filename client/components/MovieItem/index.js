import React from 'react';
import { Link } from 'react-router-dom';

export default function FilmItem({ movie }) {
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
        </div>
      </div>
    </Link>
  );
}
