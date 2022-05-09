//Components
import React from 'react';
import { Button } from 'react-bootstrap';

//Styles
import './ItemCount.scss'

function ItemCount({stock, totalStore, onAdd, offAdd, disableButtonRest, disableButton}) {

  return (
    <>
    <div>
        <p> Total store: {totalStore}</p>
        <div>
            <Button variant="primary" onClick={onAdd} disabled={disableButton} className='itemButton'> + </Button> 
                <span> {stock} </span>
            <Button variant="primary" onClick={offAdd} disabled={disableButtonRest} className='itemButton' > - </Button>
        </div>
        <Button variant= 'warning' className='m-2 itemButton'>Ver detalle</Button>
        <Button variant= 'success' disabled={disableButtonRest} className='itemButton'>Agregar al Carrito</Button>

</div>
    
    </>
  )
}

export default ItemCount