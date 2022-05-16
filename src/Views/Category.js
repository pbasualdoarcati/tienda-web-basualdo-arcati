//Components
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert'
import { Card, Spinner } from 'react-bootstrap';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import Footer from '../components/Footer/Footer';
import Item from '../components/Item/Item';




function Category() {

    let categoryParams = useParams()
    let clothing = categoryParams.category

    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
  
    useEffect( ()=>{
      const endPoint = `https://fakestoreapi.com/products/category/${clothing}`
  
      axios.get(endPoint)
      .then(resp =>{
        const apiData = resp.data
        setItems(apiData)
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
  
    }, [items])

  return (
    <>
    {
        loading ? (
            <>
            <div className='d-flex'>
                <h2 className="visually">Cargando por favor espere...</h2><Spinner animation="border" role="status" />
            </div>
            </>
        ):(
            <>
            <Card className='cardContainer'>
                <Card.Body className='itemList'>
                    <Item item={items}/>
                </Card.Body>
            </Card>
    
            <ScrollButton />
            <Footer />
            </>
                
        )
        
    }
    </>
  )
}

export default Category