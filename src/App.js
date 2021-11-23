import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
//import {ItemCount} from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import React from "react"


function App() {
  
   
  return (
    <div>            
      <NavBar/>
      <ItemListContainer/> 
      <ItemDetailContainer/>          
    </div>
  );
}
    
export default App;
