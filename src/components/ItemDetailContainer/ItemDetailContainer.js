//Components
import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Card } from 'react-bootstrap';
import axios from 'axios'
import swal from 'sweetalert'
import ScrollButton from '../ScrollButton/ScrollButton';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    let itemParams = useParams()  //Capturamos el id de nuetro producto pero nos devuelve un objeto que debemos seleccionar solo el numero
    let itemID = itemParams.id                     

    const [itemDetail, setItemDetail] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect( () =>{
        function getItem(){
            
        const endPoint = `https://fakestoreapi.com/products/${itemID}`
        axios.get(endPoint)
        .then( resp =>{
            const apiData = resp.data
            setItemDetail(apiData)
            
        })
        .catch( err =>{
            swal({
                title: "Hubo errores, intente nuevamente más tarde",
                icon: 'warning',
            })
        })
        .finally(()=>{
            setLoading(false)
        })
    }

    getItem()
}, []) 

let initial = 0

const onAdd = (cantidad)=>{
  console.log(`Cantidad de items en el carrito: ` + cantidad);
}

  return (
    <>
        <Card className='cardContainer'>
            <Card.Body>
             <ItemDetail 
                 loading={loading}
                 itemDetail={itemDetail}
                 initial = {initial}
                 onAdd={onAdd}
             />
            </Card.Body>

        </Card> 

        <ScrollButton />
        <Footer />  
    </>
  )
}

export default ItemDetailContainer