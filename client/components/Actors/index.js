import React, { Fragment } from 'react';
import Actor from '../Actor';

export default function Actors(movieCredits) {
  return (
    <Fragment>
      {movieCredits.actors.map((movieCredit, i) => (
        <div key={i} className="col-lg-2 col-md-6 col-sm-6 mb-4">
          <Actor movieCredit={movieCredit} />
        </div>
      ))}
    </Fragment>
  );
}
