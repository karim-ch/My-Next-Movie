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
console.log(api_key);

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

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    NowPlaying: {
      type: new GraphQLList(NewPlayingType),
      resolve() {
        return axios
          .get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
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
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});
