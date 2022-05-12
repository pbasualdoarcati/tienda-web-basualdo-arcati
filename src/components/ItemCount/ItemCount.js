//Components
import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

//Styles
import './ItemCount.scss'

function ItemCount({stock, initial, onAdd}) {

  let disableButtonRest = false
  let disableButton = false

  const [counterItem, setCounterItem] = useState(initial)

  const handlerClickAdd = () =>{
      setCounterItem(counterItem + 1)
  }

  const handlerClickRest = () =>{
      setCounterItem(counterItem - 1)
  }

// Control de botones ante el stock y cantidad de items

//Si el contador inicial es 0, desactivo el boton -
if(counterItem === 0){
  disableButtonRest = true
}

//Si el contador es mayor que el stock, desactivo el boton +
if (counterItem >= stock){
  disableButton = true
}

  return (
    <>
    <div>
        <p> Total store: {stock - counterItem}</p>
        <div>
            <Button variant="primary" disabled={disableButton} className='itemButton' onClick={handlerClickAdd}> + </Button> 
                <span> {counterItem} </span>
            <Button variant="primary" disabled={disableButtonRest} className='itemButton' onClick={handlerClickRest}> - </Button>
        </div>
        <Button variant= 'success' disabled={disableButtonRest} className='itemButton' onClick={onAdd}>Agregar al Carrito</Button>

</div>
    
    </>
  )
}

export default ItemCount