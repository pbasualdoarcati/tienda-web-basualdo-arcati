//Styles
import './ItemListContainer.scss'
//Components
import { Card } from 'react-bootstrap';



function ItemListContainer (){
    return(
        <>
        <Card className='cardContainer'>
            <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        </>
    )
}
export default ItemListContainer