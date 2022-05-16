//Components
import { Card } from 'react-bootstrap';
import ItemList from '../ItemList/ItemList';
import ScrollButton from '../ScrollButton/ScrollButton';
import Footer from '../Footer/Footer';

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

        <ScrollButton />
        <Footer />
        </>
    )
}
export default ItemListContainer