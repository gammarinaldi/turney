import React from 'react';
import { Nav, NavItem, NavLink, Alert } from 'reactstrap';

const Trending = (props) => {
  return (
    <div>
      <Alert color="success">
      <h5>What's trending now</h5>
      <div style={{ margin: '20px' }}>
        <Nav justified>
          <NavItem>
            <NavLink href="#">Turnamen PUBG</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Lomba fotografi</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Color Run 2019</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Kompetisi badminton</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Cerdas cermat</NavLink>
          </NavItem>
        </Nav>
      </div>
        </Alert>
    </div>
  );
};

export default Trending;