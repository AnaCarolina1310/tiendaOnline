import {BsFillCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './cartWidget.css'
export const CartWidget =() =>{

    return(
        <Link to='/cart' className='carrito-icon'>
            <BsFillCartFill/>
        </Link>
    )
}