import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    Button
     } from 'reactstrap';

class Footer extends Component {
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
        <Navbar fixed color="light" light expand="md">
        <div style={{ color: 'grey' }}>
            © 2018, Gama Rinaldi, Made in Indonesia
            <br/><br/>
            Turney HQ
            <br/>Green Office Park 6, GF, BSD, Kab. Tangerang, Indonesia
            <br/>Tel: +62 081991090777
            <br/>Mail: inqury@turney.id
        </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink href="#">About Us</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">What is Turney</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Privacy Policy</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Term in Use</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Help</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <br/>
      </div>
      );
    }
}
  
    
export default Footer;