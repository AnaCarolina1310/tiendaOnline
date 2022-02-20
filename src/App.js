import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import "./styles.css"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {CartProvider} from './components/CartContext/CartContext'


function App() {

 
 
  return (
    <>
   <CartProvider>
      <BrowserRouter>
         <NavBar/>
         <Routes>
           <Route path="/" element={<ItemListContainer/>}/>
           <Route path="/productos/:catId" element={<ItemListContainer/>}/>
           <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
           <Route path="*" element={<Navigate to='/'/>}/>
         </Routes>
        
      </BrowserRouter>
  </CartProvider>
    </>
  );
}

export default App;
