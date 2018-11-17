import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const Search = (props) => {
  return (
    <div>
      <InputGroup>
        <Input placeholder="Search tournament, competition, contest"/>
        <InputGroupAddon addonType="append">
          <Button color="success">Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Search;