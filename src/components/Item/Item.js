// Components
import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


//Styles

import './Item.scss'

function Item({item}) {

  return (
    <>
        {
          item.map((oneItem)=>{
              return ( 
              <div key={oneItem.id}>
                <Card className='item'>
                    <Card.Img variant="top" src={oneItem.image} className='imgItem img-fluid' />
                    <Card.Body>
                      <Card.Title>{oneItem.title.substring(0, 20)}...</Card.Title>
                      <Card.Text>
                        {oneItem.description.substring(0, 30)}...
                      </Card.Text>
                      <Card.Text>
                        Cantidad en stock: {oneItem.rating.count}
                        <br />
                        Precio: {oneItem.price}
                      </Card.Text>
                        <Link to={`/item/${oneItem.id}`} className='linkButton'>Ver detalles</Link>
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