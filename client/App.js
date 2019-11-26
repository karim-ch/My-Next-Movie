import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './style/App.css';
import { url } from '../config';

const client = new ApolloClient({
  url
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideBar: false,
      widthSide: 0,
      displayButton: 'block'
    };
  }

  render() {
    return (
      <div className="App" style={{ position: 'relative' }}>
        <div className="container-fluid my-main-app">
          <ApolloProvider client={client}>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </ApolloProvider>
        </div>
      </div>
    );
  }
}

export default App;
