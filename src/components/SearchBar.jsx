import React from "react";
import {InputGroup, FormControl} from "react-bootstrap";
import '../styles/SearchBar.scss'
function SearchBar() {
  return (
    <div>
      <InputGroup className="mb-3 search-bar">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm"><i class="bi bi-search"></i></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Search Twitter"
        />
      </InputGroup>
    </div>
  );
}

export default SearchBar;
