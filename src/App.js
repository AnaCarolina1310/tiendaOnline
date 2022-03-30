import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import "./styles.css"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {CartProvider} from './components/CartContext/CartContext'
import {Cart} from './components/Cart/Cart'
import {Checkout} from './components/Checkout/Checkout'
import {Footer} from './components/footer/Footer'
import { Banner } from "./components/banner/Banner";


function App() {

 
 
  return (
    <>
   <CartProvider>
      <BrowserRouter>
        <Banner mensaje='  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua    '/>
         <NavBar/>
        
         <Routes>
           <Route path="/" element={<ItemListContainer/>}/>
           <Route path="/productos/:catId" element={<ItemListContainer/>}/>
           <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
           <Route path="*" element={<Navigate to='/'/>}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/checkout" element={<Checkout/>}/>
         </Routes>
        <Footer/>
      </BrowserRouter>
  </CartProvider>
    </>
  );
}

export default App;
