//Components
import React from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';


function ItemCount() {

    
       
    const [stock, setStock] = useState(0)
    const [totalStore, setTotalStore] = useState (10)
   
    const onAdd = () =>{
        setStock(stock+1)
        setTotalStore (totalStore-1)
    }
    const offAdd = () =>{
        setStock (stock-1)
        setTotalStore (totalStore+1)
    }

    let disableButtonRest = false
    let disableButton = false
    if (stock === 0){
        disableButtonRest = true
    }
    if (stock === 10){
        disableButton = true
    }

  return (
    <>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/holder.png" />
        <Card.Body>
        <Card.Title>
            Item Name 
        </Card.Title>
        <Card.Text>
        Total store: {totalStore}
        </Card.Text>
        <Card.Text>
            <Button variant="primary" onClick={onAdd} disabled={disableButton}> + </Button> 
                <span> {stock} </span>
            <Button variant="primary" onClick={offAdd} disabled={disableButtonRest} > - </Button>
        </Card.Text>
        <Button variant= 'success' disabled={disableButtonRest}>Agregar al Carrito</Button>
  </Card.Body>
</Card>
    
    </>
  )
}

export default ItemCount