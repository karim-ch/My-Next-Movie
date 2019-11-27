import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class FilmItem extends Component {
  render() {
    const { movie } = this.props;
    return (
      <Link style={{ textDecoration: 'none' }} to={'/info/' + movie.id}>
        <div
          className="movie-data"
          style={{
            backgroundImage: `url(${movie.poster_path})`,
            backgroundSize: 'cover'
          }}
        >
          <div className="movie-overlay">
            <div className>{movie.title}</div>
          </div>
        </div>
      </Link>
    );
  }
}

export default FilmItem;
