import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
         <NavBar/>
         <ItemListContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
