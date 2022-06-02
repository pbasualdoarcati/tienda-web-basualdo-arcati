//Elements and modules

import React, { useContext } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

//Components

import { CartContext } from "../../context/CartContext";
import ScrollButton from "../ScrollButton/ScrollButton";
import Footer from "../Footer/Footer";

//Style

import "./Cart.scss";

function Cart() {
  const { product, totalPrice, clearCart, deleteItem } =
    useContext(CartContext);

  return (
    <>
      {product.length > 0 ? (
        <>
          <Card className="cardTotal">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h5>Cantidad de Productos</h5>
                <Card.Text>
                  {product.length}
                  {product.length === 1 ? " producto" : " productos"}
                </Card.Text>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Total a pagar:</h5>
                <Card.Text>${totalPrice()}</Card.Text>
              </ListGroup.Item>
            </ListGroup>
            <Button onClick={clearCart}>Vaciar carrito</Button>
            <Button>Terminar mi compra</Button>
          </Card>
          <Card className="cartContainer">
            {product.map((item) => {
              return (
                <div>
                  <Card className="cardCart">
                    <div>
                      <Card.Img
                        variant="left"
                        key={item.id}
                        src={item.item.image}
                        className="imgItem"
                      />
                    </div>
                    <Card.Body>
                      <div className="btnCartDelete">
                        <Button onClick={() => deleteItem(item.item.id)}>
                          X{" "}
                        </Button>
                      </div>
                      <Card.Title className="cartText">
                        {item.item.title}
                      </Card.Title>
                      <Card.Text className="cartText">
                        {item.item.description}
                      </Card.Text>
                      <Card.Text className="cartText">
                        Cantidades: {item.quantity}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Card>
        </>
      ) : (
        <>
          <h1 className="titleEmpty">Su carrito está vacio</h1>
          <Link to="/" className="goToBack">
            Volver
          </Link>
        </>
      )}

      <ScrollButton />
      <Footer />
    </>
  );
}

export default Cart;
