// Components
import { Button } from 'bootstrap';
import React from 'react'
import { Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';


//Styles

import './Item.scss'

function Item({item}) {

    let initial = 0
    let stock = 10     



    const onAdd = ()=>{
      console.log(`Aca deberia tener la cantidad de items`);
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
                      <ItemCount 
                        stock = {stock}
                        initial ={initial}
                        onAdd = {onAdd}
                        />
                        <button className='btn btn-warning detaills' id={oneItem.id} onClick={prueba}>Ver detalles</button>

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