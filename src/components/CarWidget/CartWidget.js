//Components
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { Button } from 'react-bootstrap';


function CartWidget({cantItem}){
    const [counter, setCounter] = useState(0)
    const handleClick = () =>{
        setCounter(counter+1)
    }

    return(
        
        <Button variant="light" onClick={handleClick}><ShoppingCartIcon/>{counter} {cantItem}</Button>
    )
}

export default CartWidget