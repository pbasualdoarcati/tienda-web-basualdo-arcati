//Elements and modules
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

//Components

import ItemList from "../ItemList/ItemList";
import ScrollButton from "../ScrollButton/ScrollButton";
import Footer from "../Footer/Footer";
import listado from '../Listado/Listado'

//Styles

import "./ItemListContainer.scss";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // let endPoint;

  //Capturamos lo que esta en la url

  let category = useParams();
  let clothing = category.categoryID;



  const getListado = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listado)
    }, 1000)
  })
  
  useEffect(() => {
    setLoading(true)
    getListado.then(resp => {
      let datos = resp
      setItems(datos)

      if (category.categoryID === undefined) {
        setItems(datos)
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } else {
        setItems( datos.filter(elem => elem.category === clothing))
        
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }  
    })
  }, [clothing])


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
