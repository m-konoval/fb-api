import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

// Component
import Layout from './components/Layout';

// Styles CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout />
        </Router>
      </Provider>
    );
  }
}

export default App;
