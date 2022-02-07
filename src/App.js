import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer />
     
    </div>
  );
}

export default App;
