//Elements and modules
import React, { useState, useContext } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";

//Components
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/firebaseConfig";

//Style
import "./Shop.scss";

function Shop({ showShop, product, total }) {
  const { setShow, clearCart } = useContext(CartContext);

  const [showModal, setShowModal] = useState(showShop);
  const [order, setOrder] = useState("");
  let today = new Date();
  const initialState = {
    buyer: [
      {
        name: "",
        number: "",
        email: "",
      },
    ],
    items: [
      {
        id: " ",
        title: " ",
        price: " ",
      },
    ],
    date: "",
    total: "",
  };

  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      buyer: [{ ...values.buyer[0], [name]: value }],
      items: product,
      total: Number(total),
      date: today,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "Orders"), values);
    setOrder(docRef.id);
    setValues(initialState);
  };
  console.log(product);

  const handleClose = () => {
    setShowModal(false);
    setShow(false);
  };

  return (
    <>
      <Modal className="cardForm" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de orden de compra</Modal.Title>
        </Modal.Header>
        {order ? (
          <>
            <Card className="cardForm">
              <Card.Title>Orden enviada</Card.Title>
              <Card.Body>
                <Card.Text>Su número de orden es: {order}</Card.Text>
                <Card.Footer className="text-muted d-flex justify-content-around">
                  ¡Muchas gracias por su compra!
                </Card.Footer>
              </Card.Body>
              <Button
                variant="danger"
                onClick={() => clearCart()}
                className="btnForm"
              >
                Salir
              </Button>
            </Card>
          </>
        ) : (
          <>
            <Form className="form" onSubmit={onSubmit}>
              <Form.Group className="mb-3 inputForm" controlId="name">
                <Form.Label className="labelForm">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  className="labelForm"
                  placeholder="Nombre"
                  name="name"
                  value={values.name}
                  onChange={handleOnChange}
                />
                <Form.Text className="text-muted labelForm">Ej: Juan</Form.Text>
                <Form.Label className="labelForm">
                  Número de teléfono
                </Form.Label>
                <Form.Control
                  type="tel"
                  className="labelForm"
                  placeholder="Teléfono"
                  name="number"
                  value={values.number}
                  onChange={handleOnChange}
                />
                <Form.Text className="text-muted labelForm">
                  Ej: 011-1551-555
                </Form.Text>
                <Form.Label className="labelForm">Email</Form.Label>
                <Form.Control
                  type="email"
                  className="labelForm"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleOnChange}
                />
                <Form.Text className="text-muted labelForm">
                  Ej: example@example.com
                </Form.Text>
              </Form.Group>
              <Button type="submit" variant="success" className="btnForm">
                {" "}
                Enviar{" "}
              </Button>
              <Button
                variant="danger"
                onClick={handleClose}
                className="btnForm"
              >
                Salir
              </Button>
            </Form>
          </>
        )}
      </Modal>
    </>
  );
}

export default Shop;
