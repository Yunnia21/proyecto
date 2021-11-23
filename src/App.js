import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import {ItemCount} from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import React, { useState } from "react"


function App() {
  const [cart, setCart] = useState(0);
	const stock = 5;

	const onAdd = (value) => {
		setCart(cart + value);
		alert('Cargado al carrito ' + cart + ' productos.')
	}
 
  return (
    <div>            
      <NavBar/>
      <ItemListContainer/> 
      <ItemDetailContainer/>          
    </div>
  );
}
<ItemCount/>     
export default App;
