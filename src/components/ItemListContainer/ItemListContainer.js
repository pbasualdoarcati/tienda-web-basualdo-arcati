//Styles
import './ItemListContainer.scss'
//Components
import { Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer (){



    return(
        <>
        <Card className='cardContainer'>
            <Card.Body>
                <ItemCount 
                stock = 'stock'
                totalStore = 'totalStore'
                onAdd ='onAdd' 
                offAdd='offAdd' 
                disableButtonRest = 'disableButtonRest' 
                disableButton = 'disableButton'

                />
            </Card.Body>
            
        </Card>
        </>
    )
}
export default ItemListContainer