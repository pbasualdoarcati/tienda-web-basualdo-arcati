////Elements and modules

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from 'react-bootstrap';


function CartWidget({cantItem}){

    return(
        
        <Button variant="light" >
            <ShoppingCartIcon />
            {cantItem} {cantItem > 1 ? 'productos' : 'producto'}
        </Button>
    )
}

export default CartWidget