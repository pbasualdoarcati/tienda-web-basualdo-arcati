//Elements and modules

import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";

//Components

import ItemDetail from "../ItemDetail/ItemDetail";
import ScrollButton from "../ScrollButton/ScrollButton";
import Footer from "../Footer/Footer";
import { db } from "../../firebase/firebaseConfig";

//Style

import "./ItemDetailContainer.scss";

function ItemDetailContainer() {
  let itemParams = useParams(); //Capturamos el id de nuetro producto pero nos devuelve un objeto que debemos seleccionar solo el numero
  let itemID = itemParams.id;

  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItem = async () => {
      const q = query(collection(db, "Items"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItemDetail(docs.find((item) => item.id === itemID));
      setLoading(false);
    };
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
