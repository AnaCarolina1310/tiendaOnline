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
import { About } from "./components/About/AboutUs";
import { ContactUs } from "./components/ContactUs/ContactUs";


function App() {

 
 
  return (
    <>
   <CartProvider>
      <BrowserRouter>
       
         <NavBar/>
         <Routes>
         <Route path="/" element={<About/>}/>
           <Route path="/shop" element={<ItemListContainer/>}/>
           <Route path="/productos/:catId" element={<ItemListContainer/>}/>
           <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
           <Route path="*" element={<Navigate to='/'/>}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/checkout" element={<Checkout/>}/>
           <Route path="/contact" element={<ContactUs/>}/>
         </Routes>
        
        
        <Footer/>
      </BrowserRouter>
  </CartProvider>
    </>
  );
}

export default App;
