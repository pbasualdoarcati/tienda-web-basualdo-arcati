//Elements and modules

import React from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";

//Styles

import "./SearchButton.scss";

function SearchButton() {
  return (
    <>
      <InputGroup className="mb-3 buttonSearch">
        <FormControl
          aria-label="Buscar"
          aria-describedby="buttonSearch"
          placeholder="Buscar..."
          className="inputSearch"
        />
        <Button variant="outline-secondary" id="buttonSearch">
          <SearchIcon />
        </Button>
      </InputGroup>
    </>
  );
}

export default SearchButton;
