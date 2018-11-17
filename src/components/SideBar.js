import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class SideBar extends React.Component {
  render() {
    return (
      <div>
        <p>Menu</p>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Leaderboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Wishlist</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">My Events</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">My Wallet</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Create Event</NavLink>
          </NavItem>
        </Nav>
        <br/>
        <p>Achievements</p>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">#12 Starbucks Barista</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">#25 Kicau Mania</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">#55 Capsa Susun</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">#80 Purwadhika Futsal</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}