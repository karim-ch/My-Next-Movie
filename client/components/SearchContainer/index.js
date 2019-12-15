import React, { Fragment, useState, useEffect, useRef } from 'react';
import gql from 'graphql-tag';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import MovieItem from '../MovieItem';
import ContentLoader from '../ContentLoader';
import '../../style/SearchContainer.css';

export default function SearchContainer(props) {
  const [search, setSearch] = useState(props.match.params.search);
  const [input, setInput] = useState(search);
  const [page, setPage] = useState(1);
  const [firstSearch, setFirstSearch] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [forceRerender, setForceRerender] = React.useState(true);

  const [movies, setMovies] = useState(null);
  const [getMovies, { loading, error, data }] = useLazyQuery(query);

  useEffect(() => {
    if (data && data.searchMovies) {
      setMovies(data.searchMovies);
    }
  }, [data]);

  useEffect(() => {
    getMovies({
      variables: { search, indexValue: page }
    });
  }, [page, search]);

  useEffect(() => {
    if (ratingFilter) {
      setMovies(filterRatingMovies(ratingFilter, movies));
      setForceRerender(!forceRerender);
    }
  }, [ratingFilter]);

  /* Handle first render search */
  if (!firstSearch) {
    getMovies({
      variables: { search, indexValue: page }
    });
    setFirstSearch(true);
  }

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

                {/********************************************************** */}
                <div className="form-filter">
                  <div className="form-check">
                    <input
                      className="form-input"
                      type="checkbox"
                      name="1"
                      checked={ratingFilter === 1}
                      onChange={e => {
                        if (e.target.checked) {
                          return setRatingFilter(Number(e.target.name));
                        }
                        return setRatingFilter(0);
                      }}
                    />
                    <label className="form-label">Top rated Movies</label>
                  </div>
                  {/********************************************************** */}

                  <div className="form-check">
                    <input
                      className="form-input"
                      type="checkbox"
                      name="2"
                      checked={ratingFilter === 2}
                      onChange={e => {
                        if (e.target.checked) {
                          return setRatingFilter(Number(e.target.name));
                        }
                        return setRatingFilter(0);
                      }}
                    />
                    <label className="form-label">New Movies</label>
                  </div>
                  {/********************************************************** */}

                  <div className="form-check">
                    <input
                      className="form-input"
                      type="checkbox"
                      name="3"
                      checked={ratingFilter === 3}
                      onChange={e => {
                        if (e.target.checked) {
                          return setRatingFilter(Number(e.target.name));
                        }
                        return setRatingFilter(0);
                      }}
                    />
                    <label className="form-label">Old Movies</label>
                  </div>
                </div>
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
            <ContentLoader />
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

              {/********************************************************** */}
              <div className="form-filter">
                <div className="form-check">
                  <input
                    className="form-input"
                    type="checkbox"
                    name="1"
                    checked={ratingFilter === 1}
                    onChange={e => {
                      if (e.target.checked) {
                        return setRatingFilter(Number(e.target.name));
                      }
                      return setRatingFilter(0);
                    }}
                  />
                  <label className="form-label">Top rated Movies</label>
                </div>
                {/********************************************************** */}

                <div className="form-check">
                  <input
                    className="form-input"
                    type="checkbox"
                    name="2"
                    checked={ratingFilter === 2}
                    onChange={e => {
                      if (e.target.checked) {
                        return setRatingFilter(Number(e.target.name));
                      }
                      return setRatingFilter(0);
                    }}
                  />
                  <label className="form-label">New Movies</label>
                </div>
                {/********************************************************** */}

                <div className="form-check">
                  <input
                    className="form-input"
                    type="checkbox"
                    name="3"
                    checked={ratingFilter === 3}
                    onChange={e => {
                      if (e.target.checked) {
                        return setRatingFilter(Number(e.target.name));
                      }
                      return setRatingFilter(0);
                    }}
                  />
                  <label className="form-label">Old Movies</label>
                </div>
              </div>
            </div>
            <div className="search-section" />
          </div>
        </div>

        {/********************DIV 2****************************** */}

        <div className="col-lg-8 col-md-6 col-sm-6">
          <div className="row">
            <div className="col-12 search-result-count">
              {movies && (
                <div className="search-title">{`${movies.length} Search Result for : ${search}`}</div>
              )}
            </div>

            {movies && (
              <Fragment>
                {movies.map((movie, i) => (
                  <div key={i} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                    <MovieItem movie={movie} />
                  </div>
                ))}
              </Fragment>
            )}
          </div>
          <div className="row search-btn-section">
            <div
              className="button"
              id="button-see-more"
              onClick={() => {
                if (movies.length === 20) {
                  setPage(page + 1);
                } else {
                  alert('No more pages');
                }
              }}
            >
              <div id="spin"></div>
              <a>Next Page</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const query = gql`
  query SearchMovies($search: String, $indexValue: Int) {
    searchMovies(search: $search, indexValue: $indexValue) {
      id
      poster_path
      title
      vote_average
      release_date
    }
  }
`;

/* Filter Movies:
 *  @param ratingFilter : 0 -> return movies unsorted
 *                        1 -> return top rated movies
 *                        2 -> return Bad rated movies
 */

function filterRatingMovies(ratingFilter, d) {
  console.log(ratingFilter);
  let t = d;
  switch (ratingFilter) {
    case 1:
      t.sort(TopRating);
      break;
    case 2:
      t.sort(NewMovies);
      break;
    case 3: // old movies
      t.sort(NewMovies).reverse();
    default:
      break;
  }
  console.log(t);
  return t;
}

function TopRating(a, b) {
  const A = a.vote_average;
  const B = b.vote_average;

  let comparison = 0;
  if (A > B) {
    comparison = 1;
  } else if (A < B) {
    comparison = -1;
  }
  return comparison * -1;
}

function NewMovies(a, b) {
  const A = a.release_date;
  const B = b.release_date;

  if (A !== '' && B !== '') {
    if (parseInt(A.replace(/-/g, ''), 10) > parseInt(B.replace(/-/g, ''), 10))
      return -1;
  } else return 1;
}

//----------------------------------------------------------------------------------------------
