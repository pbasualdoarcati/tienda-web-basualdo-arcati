//Elements and modules

import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import { useParams } from "react-router-dom";

//Components

import ItemDetail from "../ItemDetail/ItemDetail";
import ScrollButton from "../ScrollButton/ScrollButton";
import Footer from "../Footer/Footer";

//Style

import "./ItemDetailContainer.scss";

function ItemDetailContainer() {
  let itemParams = useParams(); //Capturamos el id de nuetro producto pero nos devuelve un objeto que debemos seleccionar solo el numero
  let itemID = itemParams.id;

  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function getItem() {
      const endPoint = `https://fakestoreapi.com/products/${itemID}`;
      axios
        .get(endPoint)
        .then((resp) => {
          const apiData = resp.data;
          setItemDetail(apiData);
        })
        .catch((err) => {
          swal({
            title: "Hubo errores, intente nuevamente más tarde",
            icon: "warning",
          });
        })
        .finally(() => {
          setLoading(true);
        });
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    getItem();
  }, [itemID]);

  let initial = 0;

  return (
    <>
      <Card className="cardContainer">
        <Card.Body className="itemDetailContainer">
          <ItemDetail
            loading={loading}
            itemDetail={itemDetail}
            initial={initial}
          />
        </Card.Body>
      </Card>

      <ScrollButton />
      <Footer />
    </>
  );
}

export default ItemDetailContainer;
