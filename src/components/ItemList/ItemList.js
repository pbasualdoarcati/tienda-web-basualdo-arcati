// Components
import React from 'react';
import Item from '../Item/Item';
import axios from "axios";
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import {Spinner} from 'react-bootstrap'


function ItemList() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () =>{
        const endPoint = 'https://fakestoreapi.com/products'
        axios.get(endPoint)

        .then( resp =>{
            const apiData = resp.data
            setItems(apiData)
        })
        .catch( err =>{
            swal({
                title: "Hubo errores, intente nuevamente mas tarde",
                icon: 'warning',
            })
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [setItems])

    
  return (
    <>
    {
        loading ? (
            <>
            <div className='d-flex'>
            <h2 className="visually">Cargando por favor espere...</h2><Spinner animation="border" role="status" />
            </div>
            </>
            ) : (<Item item={items}/>)
            
    }
      
    </>
  )
}

export default ItemList