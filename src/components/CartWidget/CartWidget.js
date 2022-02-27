import {BsFillCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './cartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'

export const CartWidget =() =>{
 const {cantidadProductos,  cart} = useContext(CartContext)
    return(
        <Link to='/cart' className={cart.length === 0 ? 'carrito-icon cart-hidden': 'carrito-icon'}>
            <BsFillCartFill/>
            <span>{cantidadProductos()}</span>
           
        </Link>
    )
}