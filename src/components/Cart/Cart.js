import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import {BsTrash} from 'react-icons/bs'

export const Cart = () => {

    const {cart, precioTotal, vaciarCarrito, eliminarProducto} = useContext(CartContext)

    return (

        <div className="container my-3">
            <h2>Tu carrito</h2>
            <hr/>

             {cart.map((ele)=> (
                 <div key={ele.id}>
                    <h4>{ele.nombre}</h4>
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
                 <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
                 <button className="btn btn-success" >Finalizar compra</button>
             </div>
        </div>
    )
}