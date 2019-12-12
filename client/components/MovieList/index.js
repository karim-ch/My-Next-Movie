import React, { Fragment, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import MovieItem from '../MovieItem';
import gql from 'graphql-tag';
import ContentLoader from '../ContentLoader';
import '../../style/MovieList.css';

export default function MovieList(props) {
  const [req, setReq] = useState(props.req);
  const [paginatedData, setPaginatedData] = useState([]);
  const index = useIndex(1);
  const indexValue = index.value;

  const { loading, error, data } = useQuery(query, {
    variables: { req, indexValue }
  });

  useEffect(() => {
    if (data) {
      setPaginatedData(paginatedData.concat(data.moviesList));
    }
  }, [data]);

  if (loading) {
    return (
      <div>
        <h2 className="playing-now">{reqTitlePrettier(req)}</h2>
        <ContentLoader />
      </div>
    );
  }
  if (error) return <div>SERVER ERROR</div>;

  return (
    <Fragment>
      <div className="row p-2">
        <div className="col-12 p-4">
          {paginatedData === [] ? (
            <h2 className="playing-now">No Film are being played now</h2>
          ) : (
            <h2 className="playing-now">{reqTitlePrettier(req)}</h2>
          )}
        </div>

        {paginatedData.map((movie, i) => (
          <div key={i} className="col-lg-4 col-md-6 col-sm-6 mb-4">
            <MovieItem movie={movie} />
          </div>
        ))}
      </div>

      <div className="row btn-section">
        <div {...index} className="button" id="button-see-more">
          <div id="spin"></div>
          <a>See More</a>
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

function reqTitlePrettier(req) {
  switch (req) {
    case 'now_playing':
      return 'Now Playing Movies';
    case 'top_rated':
      return 'Top Rated Movies';
    default:
      return 'Movies';
  }
}

const query = gql`
  query MoviesList($req: String, $indexValue: Int) {
    moviesList(req: $req, indexValue: $indexValue) {
      id
      title
      poster_path
      vote_average
    }
  }
`;
