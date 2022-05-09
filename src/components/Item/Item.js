// Components
import React from 'react'
import { Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

//Styles

import './Item.scss'

function Item({item}) {

          
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
                        totalStore = {totalStore}
                        onAdd = {onAdd} 
                        offAdd= {offAdd}
                        disableButtonRest = {disableButtonRest} 
                        disableButton = {disableButton}
                        />
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