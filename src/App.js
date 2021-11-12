import { NavBar } from './components/NavBar/NavBar';
import { CartWidget } from './components/CartWidget/CartWidget';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (
    <div>
      <h1>Mundo Rol</h1>
      <NavBar/>  
      <ItemListContainer/>            
    </div>
  );
}

export default App;
