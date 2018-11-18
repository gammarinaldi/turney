import React from 'react';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Alert } from 'reactstrap';

const Trending = (props) => {
  return (
    <div>
        <Alert color="">
            <h5>Discover Categories</h5>
            <br/>
            <UncontrolledButtonDropdown style={{ margin: '0 20px 5px 10px' }}>
            <DropdownToggle caret outline color="primary">
                Sports
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Futsal</DropdownItem>
                <DropdownItem>Football</DropdownItem>
                <DropdownItem>Basketball 5v5</DropdownItem>
                <DropdownItem>Basketball 3v3</DropdownItem>
                <DropdownItem>Archery</DropdownItem>
                <DropdownItem>Skateboard</DropdownItem>
                <DropdownItem>BMX</DropdownItem>
                <DropdownItem>Roadbike</DropdownItem>
                <DropdownItem>Downhill</DropdownItem>
            </DropdownMenu>
            </UncontrolledButtonDropdown>
            
            <UncontrolledButtonDropdown style={{ margin: '0 20px 5px 10px' }}>
            <DropdownToggle caret outline color="primary">
            E-Sports
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem>PUBG</DropdownItem>
            <DropdownItem>AOV</DropdownItem>
            <DropdownItem>Mobile Legends</DropdownItem>
            <DropdownItem>Dota 2</DropdownItem>
            <DropdownItem>League of Legends</DropdownItem>
            <DropdownItem>Lineage 2</DropdownItem>
            </DropdownMenu>
            </UncontrolledButtonDropdown>
            
            <UncontrolledButtonDropdown style={{ margin: '0 20px 5px 10px' }}>
            <DropdownToggle caret outline color="primary">
            Games
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem>Poker</DropdownItem>
            <DropdownItem>Remi</DropdownItem>
            <DropdownItem>Chess</DropdownItem>
            <DropdownItem>UNO</DropdownItem>
            </DropdownMenu>
            </UncontrolledButtonDropdown>
            
            <UncontrolledButtonDropdown style={{ margin: '0 20px 5px 10px' }}>
            <DropdownToggle caret outline color="primary">
            Contests
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem>K-Pop Singing</DropdownItem>
            <DropdownItem>Dance</DropdownItem>
            <DropdownItem>Kicau Mania</DropdownItem>
            <DropdownItem>Car Modification</DropdownItem>
            <DropdownItem>Moto Modification</DropdownItem>
            </DropdownMenu>
            </UncontrolledButtonDropdown>
        </Alert>
    </div>
  );
}

export default Trending;