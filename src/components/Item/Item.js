// Components
import React from 'react'
import { Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';


//Styles

import './Item.scss'

function Item({item}) {

    let initial = 0

    const onAdd = (cantidad)=>{
      console.log(`Cantidad de items en el carrito: ` + cantidad);
    }

    const prueba = (e)=>{
      console.log(e.target.id);
    }
  return (
    <>
        {
          item.map((oneItem)=>{
              return ( 
              <div key={oneItem.id}>
                <Card className='item'>
                    <Card.Img variant="top" src={oneItem.image} className='imgItem img-fluid' />
                    <Card.Body>
                      <Card.Title>{oneItem.title.substring(0, 20)}</Card.Title>
                      <Card.Text>
                        {oneItem.description.substring(0, 30)}
                      </Card.Text>
                      <Card.Text>
                        Cantidad en stock: {oneItem.stock}
                      </Card.Text>
                      <ItemCount 
                        stock = {oneItem.stock}
                        initial ={initial}
                        onAdd = {onAdd}
                        />
                        <Button variant= 'warning' className='detaills' id={oneItem.id} onClick={prueba}>Ver detalles</Button>

                    </Card.Body>
                </Card>
              </div>
                )
          })  
        }
    </>
  )
}

export default Item