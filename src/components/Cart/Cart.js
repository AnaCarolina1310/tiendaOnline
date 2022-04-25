import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import {BsTrash} from 'react-icons/bs'
import { Link } from "react-router-dom"
import './Cart.css'
export const Cart = () => {

    const {cart, precioTotal, vaciarCarrito, eliminarProducto} = useContext(CartContext)
  
    return (

        <div className="contenedor-card">
            
            <h2>Tu carrito</h2>
            <hr/>

             {cart.map((ele)=> (
            <div key={ele.id} className='card-check'>
                <div className="imagen-cart"> 
                     <img src={ele.imagen} alt={ele.nombre}  />
                </div>
                <div className="contenido-check">   
                    <h4>{ele.nombre}</h4>
                    <p>{ele.descList}</p>
                    <p>Cantidad: {ele.cantidad}</p>
                    <p>Precio:${ele.cantidad * ele.precio}</p>
                
                </div>
                <div className="boton-eliminar-contenedor">
                <button className="btn btn-danger boton-eliminar" onClick={()=>eliminarProducto(ele.id)}>
                        <BsTrash/>
                    </button>
                    <hr/> 
                </div>
                    
                    
            </div>
                
             ))}
             <h2>Total: ${precioTotal()}</h2> 
           {cart.length > 0?
             
             <div className="botones">
                 <button className="btn btn-dark m-3" onClick={vaciarCarrito}>Vaciar carrito</button>
                <Link to="/checkout" className="btn btn-dark m-3" >Finalizar compra</Link>
             </div>:
             <div>
                 <Link to="/shop" className="btn btn-success" >Volver</Link>
            </div>
            }
        </div>
    )
}