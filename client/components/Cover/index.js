import React from 'react';

import '../../style/Cover.css';
import SearchBox from '../SearchBox';

export default function Cover() {
  return (
    <div className="row home-intro">
      <div className="col-12 overlay">
        <div className="intro-data">
          <h1>
            Welcome To <span className="swap-logo">MovieApp</span>
          </h1>
          <SearchBox />
        </div>
      </div>
    </div>
  );
}
