//Components
import React from 'react'
import {Spinner} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

//Styles

import './ItemDetail.scss'

function ItemDetail({loading, itemDetail,onAdd, initial}) {

  return (
    <>
        {
        
        loading ? (
            <>
                <div className='d-flex'>
                <h2 className="visually">Cargando por favor espere...</h2><Spinner animation="border" role="status" />
                </div>
                </>
                ) : (
                <>
                    <div className="card mb-3">
                        <h1 className="card-title">{itemDetail.title}</h1>
                        <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={itemDetail.image} alt="Imagen del producto" className='imagenItem'/>
                                </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3>Descripción:</h3>
                                    <p className="card-text">{itemDetail.description}</p>
                                    <h4>Cantidad de items en stock:</h4>
                                    <p className="card-text">{itemDetail.rating.count}</p>
                                    <h4>Precio total por unidad:</h4>
                                    <p className="card-text">{itemDetail.price}</p>

                                    <ItemCount 
                                        initial ={initial}
                                        onAdd = {onAdd}
                                        stock ={itemDetail.rating.count}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                )
            }
    </>
)
  
}

export default ItemDetail