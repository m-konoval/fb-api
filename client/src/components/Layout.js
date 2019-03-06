import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';

// Components
import Header from './Header';
import Footer from './Footer';

// ** routes
import Home from './pages/Home';
import Category from './pages/Category';
import AboutMe from './pages/AboutMe';
import Contacts from './pages/Contacts';


export default function Layout() {
  return (
    <Container className="App">
      <Header />

      <Route exact path="/" component={Home} />
      <Route exact path="/category/:category_name" component={Category} />
      <Route exact path="/about-me" component={AboutMe} />
      <Route exact path="/contacts" component={Contacts} />

      <Footer />
    </Container>
  )
}
