import {BsFillCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './cartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'

export const CartWidget =() =>{
 const {cantidadProductos, precioTotal} = useContext(CartContext)
    return(
        <Link to='/cart' className='carrito-icon'>
            <BsFillCartFill/>
            <span>{cantidadProductos()}</span>
             <span>${precioTotal()}</span>
        </Link>
    )
}