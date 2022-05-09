//Components
import { Card } from 'react-bootstrap';
import ItemList from '../ItemList/ItemList';

//Styles
import './ItemListContainer.scss'

function ItemListContainer (){


    return(
        <>
        <Card className='cardContainer'>
            <Card.Body className='itemList'>
                <ItemList />
            </Card.Body>
        </Card>
        </>
    )
}
export default ItemListContainer