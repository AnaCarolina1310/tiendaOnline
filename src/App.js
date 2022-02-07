import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Hola Mundsadasdo"/>
    </div>
  );
}

export default App;
