import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { fullNav } from './shared/navigation';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
} from 'reactstrap';


export default class Header extends Component {
  state = {
    searchShow: false,
    isOpen: false
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <header id="header" className="mb-3">

        <Navbar color="light" light expand="lg">
          <NavbarBrand href="/" className="col-2">Logo</NavbarBrand>
          <NavbarToggler onClick={this.toggleCollapse} />

          <Collapse isOpen={this.state.isOpen} navbar className="col-11">
            <Nav navbar className="col-lg-10">

              {fullNav.map((link, index) => (
                <NavItem
                  key={index}
                  className='col-lg-2'>
                  <NavLink exact
                    activeClassName='active'
                    to={link.to}>

                    {link.name}
                  </NavLink>
                </NavItem>
              ))}

            </Nav>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}
