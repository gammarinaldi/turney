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

class Header extends Component {
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
          <NavbarBrand href="/">Turney</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                <NavLink href="#">Leaderboard</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Wishlist</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Inbox <Badge pill>3</Badge></NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Notif <Badge pill>2</Badge></NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Help</NavLink>
                </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    My Wallet
                  </DropdownItem>
                  <DropdownItem>
                    Settings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
                &nbsp;&nbsp;&nbsp;
                <NavItem>
                <Button color="success">Create Event</Button>{' '}
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      );
    }
}
  
    
export default Header;