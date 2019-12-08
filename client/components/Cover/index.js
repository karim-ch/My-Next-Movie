import React, { useState } from 'react';
import '../../style/Cover.css';

export default function Cover() {
  const search = useSearchFormInput('');
  return (
    <div className="row home-intro">
      <div className="col-12 overlay">
        <div className="intro-data">
          <h1>
            Welcome To <span className="swap-logo">MovieApp</span>
          </h1>
          <div className="search-container">
            <input {...search} placeholder="Search for a film" />
            <button onClick={displayFilm}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function displayFilm(e) {
  console.log(e);
}

function useSearchFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleSearchChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleSearchChange
  };
}
