import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/SearchBox.css';

export default function SearchBox() {
  const search = useSearchFormInput('');

  return (
    <div className="search-container">
      <input {...search} placeholder="Search for a film" />
      <Link style={{ textDecoration: 'none' }} to={'/search/' + search.value}>
        <button>Search</button>
      </Link>
    </div>
  );
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
