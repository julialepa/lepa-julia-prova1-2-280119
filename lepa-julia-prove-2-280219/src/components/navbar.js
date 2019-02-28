import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
 } from 'reactstrap';

class MyNavbar extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        return (
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/"><i className="fab fa-2x  fa-angrycreative"></i></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink >Go To Main Website</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        );
    }
}

export default MyNavbar;