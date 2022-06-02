//Elements and modules

import React, { useState, useContext } from "react";
import { Button, FormControl, Form } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import swal from "sweetalert";

//Components

import { CartContext } from "../../context/CartContext";

//Styles

import "./SearchButton.scss";

function SearchButton() {
  const [inputText, setInputText] = useState("");
  const { allItem, setSearch, search } = useContext(CartContext);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputTextSanit = inputText.toLowerCase();
    if (inputTextSanit === "") {
      swal({
        title: "Ingrese un producto",
        icon: "warning",
      });
    } else {
      let itemFilter = allItem.filter((el) =>
        el.title.toLowerCase().includes(inputTextSanit)
      );
      setSearch(itemFilter);
      setInputText("");
    }
  };

  console.log(search);

  //Falta hacer el componente para mostrar algo asi como un listado de los productos que coinciden con la busqueda
  //Podemos pasarle por useParams para que navegue por ahi

  return (
    <>
      <Form className="styleForm" onSubmit={handleSubmit}>
        <FormControl
          aria-label="Buscar"
          aria-describedby="buttonSearch"
          placeholder="Buscar..."
          value={inputText}
          className="inputSearch Ease-In"
          onChange={handleChange}
        />
        <Button
          variant="outline-secondary"
          id="buttonSearch"
          className="buttonSearch"
          type="submit"
        >
          <SearchIcon />
        </Button>
      </Form>
    </>
  );
}

export default SearchButton;
