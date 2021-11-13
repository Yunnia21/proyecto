import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (
    <div>      
      <ItemListContainer greeting = "Holi, acabas de entrar a Mundo Rol" user = "Claudia"/>
      <NavBar/>            
    </div>
  );
}

export default App;
