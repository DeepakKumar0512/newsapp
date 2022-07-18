import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,NavLink
  } from 'reactstrap';
import { Link } from "react-router-dom"  

export default class navbar extends React.Component {
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
      <div>
        <Navbar color="dark"  className='fixed-top' dark expand="md">
          <NavbarBrand >News-Teller</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto " navbar>
              <NavItem>
                <NavLink tag={Link} to="/">General</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/business">Business </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/entertainment">Entertainment</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/health">Health</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/science">Science</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  tag={Link} to="/sports">Sports</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link}  to="/technology">Technology</NavLink>
              </NavItem>
             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}