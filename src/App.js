import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import "./styles.css"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {useState} from 'react'
import {CartContext} from './components/CartContext/CartContext'

function App() {
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
 
 
  return (
    <>
      <CartContext.Provider value={
        {
        cart,
        agregarAlCarrito,
        isInCart,
        cantidadProductos,
        precioTotal
      }
      }>
      <BrowserRouter>
         <NavBar/>
         <Routes>
           <Route path="/" element={<ItemListContainer/>}/>
           <Route path="/productos/:catId" element={<ItemListContainer/>}/>
           <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
           <Route path="*" element={<Navigate to='/'/>}/>
         </Routes>
        
      </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
