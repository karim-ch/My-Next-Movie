import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../style/SearchBox.css';

export default function SearchBox() {
  const search = useSearchFormInput('');
  // const link = useLink(false);
  // console.log(link.value);

  return (
    <div className="search-container">
      {/* {link.value ? <Redirect to={'/search/' + search.value} /> : null} */}
      <input {...search} placeholder="Search for a film" />
      <Link style={{ textDecoration: 'none' }} to={'/search/' + search.value}>
        <button>Search</button>
      </Link>
    </div>
  );
}

// function useLink(initialValue) {
//   const [l, setL] = useState(initialValue);
//   function handleSearch(e) {
//     setL(true);
//   }
//   return {
//     value: l,
//     onClick: handleSearch
//   };
// }

function useSearchFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleSearchChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleSearchChange
  };
}
