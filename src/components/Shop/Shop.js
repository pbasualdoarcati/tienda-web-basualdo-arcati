//Elements and modules
import React, { useState, useContext } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

//Components
import { CartContext } from "../../context/CartContext";
import { db, app } from "../../firebase/firebaseConfig";

//Style
import "./Shop.scss";

function Shop({ showShop, product, total }) {
  const { setShow, clearCart, user, setUser } = useContext(CartContext);
  const [miSesion, setMiSesion] = useState(true);
  const [showModal, setShowModal] = useState(showShop);
  const [order, setOrder] = useState("");
  const auth = getAuth(app);
  let today = new Date();
  const initialState = {
    buyer: [
      {
        name: "",
        surname: "",
        email: "",
        password: "",
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

  const userInitialState = {
    user: [
      {
        email: "",
        password: "",
      },
    ],
  };

  const [values, setValues] = useState(initialState);
  const [userInitial, setUserInitial] = useState(userInitialState);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUser(usuarioFirebase);
    } else {
      setUser(null);
    }
  });

  async function login(email, password) {
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });
    console.log("Usuario creado: ", user);
  }

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

  const handleOnChangeSession = (e) => {
    const { name, value } = e.target;
    setUserInitial({
      ...userInitial,
      user: [{ ...userInitial.user[0], [name]: value }],
    });
    setValues({
      ...values,
      buyer: [{ ...values.buyer[0], [name]: value }],
      items: product,
      total: Number(total),
      date: today,
    });
    console.log(userInitial);
  };

  const onSubmitRegister = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "Orders"), values);
    if (!miSesion) {
      login(values.buyer[0].email, values.buyer[0].password);
    }
    setOrder(docRef.id);
    setValues(initialState);
  };
  const onSubmitSesion = async (e) => {
    e.preventDefault();
    const user = await signInWithEmailAndPassword(
      auth,
      userInitial.user[0].email,
      userInitial.user[0].password
    );
    console.log(user.user.email);
    const docRef = await addDoc(collection(db, "Orders"), values);
    setOrder(docRef.id);
    console.log(docRef.id);
  };

  const handleClose = () => {
    setShowModal(false);
    setShow(false);
  };
  const handleRegister = () => {
    setMiSesion(false);
  };
  return (
    <>
      <Modal className="cardForm" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de orden de compra</Modal.Title>
        </Modal.Header>
        {miSesion ? (
          <>
            {order ? (
              <>
                <Card className="cardForm">
                  <Card.Title>Orden enviada </Card.Title>
                  <Card.Body>
                    <Card.Text> Usuario: {user.email} </Card.Text>
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
                <h1>Iniciar Sesión</h1>
                <Form onSubmit={onSubmitSesion} className="form">
                  <Form.Group
                    controlId="formBasicEmail"
                    className="mb-3 inputForm"
                  >
                    <Form.Label className="labelForm">Email</Form.Label>
                    <Form.Control
                      type="email"
                      className="labelForm"
                      placeholder="Email"
                      name="email"
                      value={userInitial.email}
                      onChange={handleOnChangeSession}
                    />
                    <Form.Label className="labelForm">Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      className="labelForm"
                      placeholder="Contraseña"
                      name="password"
                      value={userInitial.password}
                      onChange={handleOnChangeSession}
                    />
                    <Button
                      variant="primary"
                      type="submit"
                      className="btnForm btnSession"
                    >
                      {" "}
                      Iniciar Sesión{" "}
                    </Button>
                    <div className="labelRegister">
                      <Form.Label>¿No tienes cuenta?</Form.Label>
                      <Button
                        variant="info"
                        onClick={handleRegister}
                        className="btnRegister"
                      >
                        Registrarse
                      </Button>
                    </div>
                  </Form.Group>
                </Form>
              </>
            )}
          </>
        ) : (
          <>
            {order ? (
              <>
                <Card className="cardForm">
                  <Card.Title>Orden enviada </Card.Title>
                  <Card.Body>
                    <Card.Text> Usuario: {user.email} </Card.Text>
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
                <Form className="form" onSubmit={onSubmitRegister}>
                  <Form.Group className="mb-3 inputForm" controlId="name">
                    <h1>Registrarse</h1>
                    <Form.Label className="labelForm">Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      className="labelForm"
                      placeholder="Nombre"
                      name="name"
                      value={values.name}
                      onChange={handleOnChange}
                    />
                    <Form.Text className="text-muted labelForm">
                      Ej: Juan
                    </Form.Text>
                    <Form.Label className="labelForm">Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      className="labelForm"
                      placeholder="Nombre"
                      name="surname"
                      value={values.surname}
                      onChange={handleOnChange}
                    />
                    <Form.Text className="text-muted labelForm">
                      Ej: Juan
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
                    <Form.Label className="labelForm">Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      className="labelForm"
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      onChange={handleOnChange}
                    />
                    <Form.Text className="text-muted labelForm">
                      Ej: Ejemplo.123
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
          </>
        )}
      </Modal>
    </>
  );
}

export default Shop;
