//Elements and modules

import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
//Components

import ItemDetail from "../ItemDetail/ItemDetail";
import ScrollButton from "../ScrollButton/ScrollButton";
import Footer from "../Footer/Footer";
import listado from '../Listado/Listado'

//Style

import "./ItemDetailContainer.scss";

function ItemDetailContainer() {
  let itemParams = useParams(); //Capturamos el id de nuetro producto pero nos devuelve un objeto que debemos seleccionar solo el numero
  let itemID = Number(itemParams.id);

  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const getListado = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listado)
    }, 1000)
  })

  useEffect(() => {
    getListado.then(data => {
      let datos = data
      setItemDetail(datos.find(el => el.id === itemID))
      setLoading(false)
    })
      .catch(err => {
        swal({
          title: 'Hubo errores, pruebe nuevamente más tarde',
          icon: 'warning'
        })
      })
  }, [itemID])
  

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
