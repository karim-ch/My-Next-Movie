import React from 'react';
import '../../style/MovieCredit.css';

export default function MovieCredit({ movieCredit }) {
  return (
    <div
      className="actor-data"
      style={{
        backgroundImage: `url(${`https://image.tmdb.org/t/p/w500//${movieCredit.profile_path}`})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%'
      }}
    >
      <div className="actor-overlay">
        <div>{movieCredit.name}</div>
        <div>{`Character : ${movieCredit.character}`}</div>
      </div>
    </div>
  );
}
