////Elements and modules

import React, { useState } from "react";
import { Button } from "react-bootstrap";

//Styles

import "./ItemCount.scss";

function ItemCount({ stock, initial, onAdd }) {
  let disableButtonRest = false;
  let disableButton = false;

  const [counterItem, setCounterItem] = useState(initial);

  const handlerClick = (num) => {
    setCounterItem(counterItem + num);
  };

  // Control de botones ante el stock y cantidad de items

  //Si el contador inicial es 0, desactivo el boton -
  if (counterItem === 0) {
    disableButtonRest = true;
  }

  //Si el contador es mayor o igual que el stock, desactivo el boton +
  if (counterItem >= stock) {
    disableButton = true;
  }

  const idProduct = (e) => {
    let parentDiv = e.target.parentNode
    let parentProduct = parentDiv.parentNode
    parentProductId = parentProduct.id
  }
  let parentProductId

  return (
    <>
      <div>
        <p> Cantidades disponibles: {stock - counterItem}</p>
        <div>
          <Button
            variant="primary"
            disabled={disableButtonRest}
            className="itemButton"
            onClick={() => handlerClick(-1)}
          >
            {" "}
          - {" "}
          </Button>

          <span> {counterItem} </span>

          <Button
            variant="primary"
            disabled={disableButton}
            className="itemButton"
            onClick={() => handlerClick(+1)}
          >
             {" "}
            +{" "}
          </Button>
        </div>
        <Button
          variant="success"
          disabled={disableButtonRest}
          className="itemButton"
          // onClick={idProduct}
          onFocus={idProduct}
          onClick={() => onAdd(counterItem, parentProductId)}
        >
          Agregar al Carrito
        </Button>
      </div>
    </>
  );
}

export default ItemCount;
