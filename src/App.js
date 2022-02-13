import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
         <NavBar/>
         <Routes>
           <Route path="/" element={<ItemListContainer/>}/>
           <Route path="*" element={<Navigate to='/'/>}/>
         </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
