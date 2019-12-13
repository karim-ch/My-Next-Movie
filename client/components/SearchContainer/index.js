import React, { Fragment, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import MovieItem from '../MovieItem';
import '../../style/SearchContainer.css';

export default function SearchContainer(props) {
  const [search, setSearch] = useState(props.match.params.search);
  const [paginatedData, setPaginatedData] = useState([]);
  const index = useIndex(1);
  const indexValue = index.value;

  const [input, setInput] = useState(search);
  const { loading, error, data } = useQuery(query, {
    variables: { search, indexValue }
  });

  useEffect(() => {
    if (data) {
      setPaginatedData(paginatedData.concat(data.searchMovies));
    }
  }, [data]);

  if (error) return `Error! ${error.message}`;

  if (loading)
    return (
      <Fragment>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 search-intro-data">
            <p className="back-icon">
              <a href="#" className="arrow left"></a>
            </p>

            <div className="search-cards">
              <div className="search-filter-card">
                <p className="search-title-right">
                  Search for a Movie/Tv show...
                </p>
                <input
                  className="form-control"
                  onChange={event => {
                    if (event.target.value.length > 1) {
                      setSearch(event.target.value);
                      setInput(event.target.value);
                    } else {
                      setInput(event.target.value);
                    }
                  }}
                  value={input}
                />
              </div>
              <div className="search-section" />

              <div className="search-filter-card">
                <p className="search-title-right">Filter search by</p>
              </div>
              <div className="search-section" />
            </div>
          </div>

          {/********************DIV 2****************************** */}
          <div className="col-lg-8 col-md-6 col-sm-6">
            <div className="row">
              <div className="col-12 search-result-count">
                <div className="search-title">{`Loading...`}</div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6 search-intro-data">
          <p className="back-icon">
            <a href="#" className="arrow left"></a>
          </p>

          <div className="search-cards">
            <div className="search-filter-card">
              <p className="search-title-right">
                Search for a Movie/Tv show...
              </p>
              <input
                className="form-control"
                onChange={event => {
                  if (event.target.value.length > 1) {
                    setSearch(event.target.value);
                    setInput(event.target.value);
                  } else {
                    setInput(event.target.value);
                  }
                }}
                value={input}
              />
            </div>
            <div className="search-section" />

            <div className="search-filter-card">
              <p className="search-title-right">Filter search by</p>
            </div>
            <div className="search-section" />
          </div>
        </div>

        {/********************DIV 2****************************** */}

        <div className="col-lg-8 col-md-6 col-sm-6">
          <div className="row">
            <div className="col-12 search-result-count">
              <div className="search-title">{`${paginatedData.length} Search Result for : ${search}`}</div>
            </div>
            {paginatedData.map((movie, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                <MovieItem movie={movie} />
              </div>
            ))}
          </div>
          <div className="row search-btn-section">
            <div {...index} className="button" id="button-see-more">
              <div id="spin"></div>
              <a>See More</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

function useIndex(initialValue) {
  const [index, setIndex] = useState(initialValue);
  function handleIncrementIndex() {
    setIndex(index + 1);
  }
  return {
    value: index,
    onClick: handleIncrementIndex
  };
}

const query = gql`
  query SearchMovies($search: String, $indexValue: Int) {
    searchMovies(search: $search, indexValue: $indexValue) {
      id
      poster_path
      title
      vote_average
    }
  }
`;
