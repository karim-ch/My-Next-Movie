import express from 'express';
import webpack from 'webpack';

import expressGraphQL from 'express-graphql';
import schema from './schema/schema';

import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.js';

const app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});
