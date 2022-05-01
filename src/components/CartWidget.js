//Components
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from 'react-bootstrap';

function CartWidget(){
    
    const cantidadElementos = 0;
    const showMe = () =>{
        console.log('Hiciste click');
    }



    return(
        
        <Button variant="light" onClick={showMe}><ShoppingCartIcon/>{cantidadElementos}</Button>
    )
}

export default CartWidget