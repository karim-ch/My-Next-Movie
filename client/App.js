import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Route, Switch, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Details from './components/Details';
import SearchContainer from './components/SearchContainer';
import './style/App.css';
import { url } from '../config';

const client = new ApolloClient({
  url
});

const Root = () => {
  return (
    <div className="App container-fluid">
      <HashRouter>
        <ApolloProvider client={client}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:id" component={Details} />
            <Route exact path="/search/:search" component={SearchContainer} />
          </Switch>
        </ApolloProvider>
      </HashRouter>
    </div>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
