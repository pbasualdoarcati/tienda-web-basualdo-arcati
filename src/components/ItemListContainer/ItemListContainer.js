//Elements and modules
import React, { useEffect, useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";

//Components

import ItemList from "../ItemList/ItemList";
import ScrollButton from "../ScrollButton/ScrollButton";
import Footer from "../Footer/Footer";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/firebaseConfig";

//Styles

import "./ItemListContainer.scss";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setAllItem } = useContext(CartContext);

  let category = useParams();
  let clothing = category.categoryID;

  useEffect(() => {
    const getItem = async () => {
      const q = query(collection(db, "Items"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
      setAllItem(docs);
      if (category.categoryID === undefined) {
        setItems(docs);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } else {
        setItems(docs.filter((elem) => elem.category === clothing));

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    getItem();
  }, [clothing]);

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
