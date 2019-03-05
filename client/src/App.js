import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

// Styles CSS
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/style.css'

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
