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
    Button,
    Input,
    InputGroup,
    InputGroupAddon
     } from 'reactstrap';
import { UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
     

class Header extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
        this.x = window.innerWidth;
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
      
      var Leaderboard, Wishlist, Inbox, Notif, MyAccount, QuickHelp;
      if(this.x < 1200) {

        Leaderboard = 'Leaderboard'; 
        Wishlist = 'Wishlist'; 
        Inbox = 'Inbox'; 
        Notif = 'Notification'; 
        MyAccount = 'My Account';
        QuickHelp = 'Quick Help';
        console.log(this.x);
        
        return (
          <Navbar color="light" light expand="xl" fixed="top" style={{ padding: '10px 50px 10px 50px' }}>
          <NavbarBrand href="/"><b style={{ color:'#30b71d' }} id="logo">turney</b></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                <InputGroup>
                <Input style={{ fontSize: '14px' }} type="text" id="search" size="55" placeholder="Search tournament, contest, people"/>
                <InputGroupAddon addonType="append">
                    <Button color="success">Search</Button>
                  </InputGroupAddon>
                </InputGroup>
                </NavItem>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <NavItem>
                <NavLink href="#" id="Leaderboard">
                <FontAwesomeIcon icon={faTrophy} size="lg" />&nbsp;&nbsp;<b>{Leaderboard}</b></NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#" id="Wishlist">
                <FontAwesomeIcon icon={faHeart} size="lg" />&nbsp;&nbsp;<b>{Wishlist}</b></NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#" id="Inbox">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />&nbsp;&nbsp;<b>{Inbox}</b></NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#" id="Notification">
                <FontAwesomeIcon icon={faBell} size="lg" />&nbsp;&nbsp;<b>{Notif}</b></NavLink>
                </NavItem>
                
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret id="MyAccount">
                <FontAwesomeIcon icon={faUser} size="lg" />&nbsp;&nbsp;<b>{MyAccount}</b>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    My Events
                  </DropdownItem>
                  <DropdownItem>
                    My Achievements
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
                <DropdownToggle nav caret id="QuickHelp">
                <FontAwesomeIcon icon={faQuestionCircle} size="lg" />&nbsp;&nbsp;<b>{QuickHelp}</b>
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

      } else {

        return (
          <Navbar color="light" light expand="xl" fixed="top" style={{ padding: '10px 50px 10px 50px' }}>
          <NavbarBrand href="/"><b style={{ color:'#30b71d' }} id="logo">turney</b></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                <InputGroup>
                <Input style={{ fontSize: '14px' }} type="text" id="search" size="55" placeholder="Search tournament, contest, people"/>
                <InputGroupAddon addonType="append">
                    <Button color="success">Search</Button>
                  </InputGroupAddon>
                </InputGroup>
                </NavItem>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <NavItem>
                <NavLink href="#" id="Leaderboard">
                <FontAwesomeIcon icon={faTrophy} size="lg" />&nbsp;&nbsp;<b>{Leaderboard}</b></NavLink>
                <UncontrolledTooltip placement="bottom" target="Leaderboard" delay="0,100">
                Leaderboard
                </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                <NavLink href="#" id="Wishlist">
                <FontAwesomeIcon icon={faHeart} size="lg" />&nbsp;&nbsp;<b>{Wishlist}</b></NavLink>
                <UncontrolledTooltip placement="bottom" target="Wishlist" delay="0,100">
                Wishlist
                </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                <NavLink href="#" id="Inbox">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />&nbsp;&nbsp;<b>{Inbox}</b></NavLink>
                <UncontrolledTooltip placement="bottom" target="Inbox" delay="0,100">
                Inbox
                </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                <NavLink href="#" id="Notification">
                <FontAwesomeIcon icon={faBell} size="lg" />&nbsp;&nbsp;<b>{Notif}</b></NavLink>
                <UncontrolledTooltip placement="bottom" target="Notification" delay="0,100">
                Notification
                </UncontrolledTooltip>
                </NavItem>
                
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret id="MyAccount">
                <FontAwesomeIcon icon={faUser} size="lg" />&nbsp;&nbsp;<b>{MyAccount}</b>
                </DropdownToggle>
                <UncontrolledTooltip placement="bottom" target="MyAccount" delay="0,100">
                My Account
                </UncontrolledTooltip>
                <DropdownMenu right>
                  <DropdownItem>
                    My Events
                  </DropdownItem>
                  <DropdownItem>
                    My Achievements
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
                <DropdownToggle nav caret id="QuickHelp">
                <FontAwesomeIcon icon={faQuestionCircle} size="lg" />&nbsp;&nbsp;<b>{QuickHelp}</b>
                </DropdownToggle>
                <UncontrolledTooltip placement="bottom" target="QuickHelp" delay="0,100">
                Quick Help
                </UncontrolledTooltip>
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
}
  
    
export default Header;