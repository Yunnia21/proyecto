import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { CartWidget } from './components/CartWidget/CartWidget';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';



function App() {
 
  return (
    <div>            
      <NavBar/>  
      <ItemListContainer greeting = "Holi, acabas de entrar a Mundo Rol" user = "Claudia"/>            
    </div>
  );
}

export default App;
