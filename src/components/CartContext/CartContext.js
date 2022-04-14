import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{

    const [cart, setCart,  ] = useState([])
 
    const agregarAlCarrito = (item)=>{
      setCart([...cart, item])
    }
    const isInCart = (id)=>{
     return cart.some((prod)=> prod.id === id)
    }
    const cantidadProductos = ()=>{
      return cart.reduce((acc, prod) => acc + prod.cantidad, 0) 
    }
    const precioTotal = ()=>{
     return cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0) 
   }
    const vaciarCarrito = () =>{
        setCart([])
    }
     const eliminarProducto = (id) => {
        setCart( cart.filter((prod)=> prod.id !== id))
     }

   return (
     <CartContext.Provider value={
        {
        cart,
        agregarAlCarrito,
        isInCart,
        cantidadProductos,
        precioTotal,
        vaciarCarrito,
        eliminarProducto
      }
      }>
       {children}
     </CartContext.Provider>
    )
}