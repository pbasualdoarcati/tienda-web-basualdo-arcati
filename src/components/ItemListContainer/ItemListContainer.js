//Elements and modules
import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

//Components

import ItemList from "../ItemList/ItemList";
import ScrollButton from "../ScrollButton/ScrollButton";
import Footer from "../Footer/Footer";

//Styles

import "./ItemListContainer.scss";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  let endPoint;

  //Capturamos lo que esta en la url

  let category = useParams();
  let clothing = category.categoryID;

  if (clothing === undefined) {
    //Si clothing es true significa que estoy en home
    endPoint = `https://fakestoreapi.com/products/`;
  } else {
    endPoint = `https://fakestoreapi.com/products/category/${clothing}`;
  }

  useEffect(() => {
    axios
      .get(endPoint)

      .then((resp) => {
        const apiData = resp.data;
        setItems(apiData);
      })
      .catch((err) => {
        swal({
          title: "Hubo errores, intente nuevamente mas tarde",
          icon: "warning",
        });
      })
      .finally(() => {
        setLoading(true);
      });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [endPoint]);

  return (
    <>
      <Card className="cardContainer">
        <Card.Body className="itemList">
          <ItemList items={items} loading={loading} />
        </Card.Body>
      </Card>

      <ScrollButton />
      <Footer />
    </>
  );
}
export default ItemListContainer;
