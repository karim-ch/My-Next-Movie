import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLFloat
} from 'graphql';

import axios from 'axios';

// Import the Api Key
import { api_key } from '../config';

// Get the newest Films
const NewPlayingType = new GraphQLObjectType({
  name: 'NowPlaying',
  fields: {
    id: { type: GraphQLInt },
    poster_path: { type: GraphQLString },
    title: { type: GraphQLString },
    vote_average: { type: GraphQLFloat }
  }
});

// Get movie details
const MovieDetailsType = new GraphQLObjectType({
  name: 'MovieDetails',
  fields: {
    id: { type: GraphQLString },
    overview: { type: GraphQLString },
    title: { type: GraphQLString },
    poster_path: { type: GraphQLString },
    genres: { type: GraphQLString },
    release_date: { type: GraphQLString },
    vote_average: { type: GraphQLString },
    production_companies: { type: GraphQLString },
    vote_average: { type: GraphQLString },
    runtime: { type: GraphQLString }
  }
});

// Search Query
const SearchType = new GraphQLObjectType({
  name: 'Search',
  fields: {
    id: { type: GraphQLInt },
    poster_path: { type: GraphQLString },
    title: { type: GraphQLString },
    vote_average: { type: GraphQLFloat }
  }
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    moviesList: {
      type: new GraphQLList(NewPlayingType),
      args: { req: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(
            `https://api.themoviedb.org/3/movie/${args.req}?api_key=${api_key}&language=en-US&page=1`
          )
          .then(res => {
            const movies = res.data.results;
            movies.map(
              movie =>
                (movie.poster_path =
                  'https://image.tmdb.org/t/p/w500' + movie.poster_path)
            );
            return movies;
          });
      }
    },

    movieDetails: {
      type: MovieDetailsType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(
            `https://api.themoviedb.org/3/movie/${args.id}?api_key=${api_key}&language=en-US&page=1`
          )
          .then(res => {
            if (res) {
              const movie = res.data;
              movie.genres = movie.genres.map(g => g.name).join(', ');
              movie.production_companies = movie.production_companies
                .map(g => g.name)
                .join(', ');
              return movie;
            }
            return [];
          });
      }
    },

    searchMovies: {
      type: new GraphQLList(SearchType),
      args: { search: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${args.search}&language=en-US&page=1`
          )
          .then(res => {
            if (res.data.results) {
              const movies = res.data.results;
              movies.map(
                movie =>
                  (movie.poster_path =
                    'https://image.tmdb.org/t/p/w500' + movie.poster_path)
              );
              return movies;
            }
            return [];
          });
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});
