import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import {BsTrash} from 'react-icons/bs'
import { Link } from "react-router-dom"

export const Cart = () => {

    const {cart, precioTotal, vaciarCarrito, eliminarProducto} = useContext(CartContext)

    return (

        <div className="container my-3">
            <h2>Tu carrito</h2>
            <hr/>

             {cart.map((ele)=> (
                 <div key={ele.id}>
                    <h4>{ele.nombre}</h4>
                    <img src={ele.imagen} alt={ele.nombre} style={{width: '10%'}} />
                    <p>Cantidad:{ele.cantidad}</p>
                    <p>Precio:${ele.cantidad * ele.precio}</p>
                    <button className="btn btn-danger" onClick={()=>eliminarProducto(ele.id)}>
                        <BsTrash/>
                    </button>
                    <hr/>
                    
                 </div>
             ))}
             <h2>Total: ${precioTotal()}</h2> 
             <div>
                 <button className="btn btn-danger mx-4" onClick={vaciarCarrito}>Vaciar carrito</button>
                 <Link to="/checkout" className="btn btn-success" >Finalizar compra</Link>
             </div>
        </div>
    )
}