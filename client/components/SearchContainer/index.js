import React, { Fragment, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import MovieItem from '../MovieItem';
import '../../style/SearchContainer.css';

export default function SearchContainer(props) {
  const [search, setSearch] = useState(props.match.params.search);
  const [input, setInput] = useState(search);
  const { loading, error, data } = useQuery(query, { variables: { search } });
  if (error) return `Error! ${error.message}`;

  if (loading)
    return (
      <Fragment>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 search-intro-data">
            <p className="back-icon">
              <a href="#" className="arrow left"></a>
            </p>

            <div>
              <div className="search-filter-card">
                <div className="search-section" />
                <p className="search-title-right">
                  {' '}
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
                <nav style={{ paddingTop: '30px' }} aria-label="...">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex="-1">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        2 <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="search-filter-card">
                <div className="search-section" />
                <p className="search-title-right">Filter search by</p>
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

          <div>
            <div className="search-filter-card">
              <div className="search-section" />
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

              <nav style={{ paddingTop: '30px' }} aria-label="...">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      2 <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="search-filter-card">
              <div className="search-section" />
              <p className="search-title-right">Filter search by</p>
            </div>
          </div>
        </div>

        {/********************DIV 2****************************** */}

        <div className="col-lg-8 col-md-6 col-sm-6">
          <div className="row">
            <div className="col-12 search-result-count">
              <div className="search-title">{`${data.searchMovies.length}Search Result for : ${search}`}</div>
            </div>
            {data.searchMovies.map((movie, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                <MovieItem style={{}} movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const query = gql`
  query SearchMovies($search: String) {
    searchMovies(search: $search) {
      id
      poster_path
      title
      vote_average
    }
  }
`;
