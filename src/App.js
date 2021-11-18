import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
//import {ItemCount} from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
 
  return (
    <div>            
      <NavBar/>
      <ItemListContainer/>           
    </div>
  );
}
//<ItemCount/>     
export default App;
