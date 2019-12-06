import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Route, Switch, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Details from './components/Details';
import './style/App.css';
import { url } from '../config';

const client = new ApolloClient({
  url
});

const Root = () => {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <div className="container-fluid my-main-app">
        <HashRouter>
          <ApolloProvider client={client}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/details/:id" component={Details} />
            </Switch>
          </ApolloProvider>
        </HashRouter>
      </div>
    </div>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
