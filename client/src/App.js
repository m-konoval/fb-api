import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App main-layout">

          <h1>APP work with Redux</h1>

          <a href="/auth/facebook">Facebook</a>

        </div>
      </Provider>
    );
  }
}

export default App;
