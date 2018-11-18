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
    Button,
    Input,
    InputGroup,
    InputGroupAddon,
    Tooltip
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
        <Navbar color="light" light expand="xl" fixed="top" style={{ padding: '10px 50px 10px 50px' }}>
        <NavbarBrand href="/"><b style={{ color:'#30b71d' }} id="logo">turney</b></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
              <NavItem>
              <InputGroup>
              <Input style={{ fontSize: '14px' }} type="text" id="search" size="50" placeholder="Search tournament, competition, contest, people, team"/>
              <InputGroupAddon addonType="append">
                  <Button color="success">Search</Button>
                </InputGroupAddon>
              </InputGroup>
              </NavItem>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <NavItem>
              <NavLink href="#"><b>Leaderboard</b></NavLink>
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
              
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                My Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  My Events
                </DropdownItem>
                <DropdownItem>
                  My Achievements
                </DropdownItem>
                <DropdownItem>
                  Wishlist
                </DropdownItem>
                <DropdownItem>
                  My Team
                </DropdownItem>
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

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Help
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  How it works
                </DropdownItem>
                <DropdownItem>
                  How to create an event
                </DropdownItem>
                <DropdownItem>
                  What does it cost to create an event
                </DropdownItem>
                <DropdownItem>
                  How to contact the event organizer
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Help center
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
      );
    }
}
  
    
export default Header;