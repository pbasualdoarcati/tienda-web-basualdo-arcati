//Elements and modules
import React, { useState, useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";

//Components
import { CartContext } from "../../context/CartContext";

//Style
import "./Shop.scss";

function Shop({ showShop }) {
  const { setShow } = useContext(CartContext);
  const [showModal, setShowModal] = useState(showShop);

  const initialState = {
    name: "",
    number: "",
    email: "",
  };

  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
      e.preventDefault();
      console.log('clic');
    console.log(values);
  };

    const handleClose = () => {
        setShowModal(false)
        setShow(false)
    };

    //No esta funcionando el onSubmit
  return (
    <>
      <Modal className="cardForm" show={showModal} onHide={handleClose}>
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
            <Form.Label className="labelForm">Número de teléfono</Form.Label>
            <Form.Control
              type="number"
              className="labelForm"
              placeholder="Telefono"
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
          <Button variant="success" className="btnForm">
            {" "}
            Enviar{" "}
          </Button>
          <Button variant="danger" onClick={handleClose} className="btnForm">
            Salir
          </Button>
        </Form>
      </Modal>
    </>
  );
}

export default Shop;
