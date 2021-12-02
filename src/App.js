import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
//import { AppRouter } from './router/AppRouter';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {React, useState} from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartView } from './components/CartView/CartView'
import { CartContext } from './Context/CartContext/'



function App() {
  const [carro, setCarro] = useState([])
  const agregarAlCarro = (item) =>{
    setCarro([...carro, item])
  }
  const quitarDelCarro = (id) => {
    setCarro(carro.filter(prod => prod.id !== id))
  }
  const vaciarCarro = () => {
    setCarro([])
  }
  const enCarro = (id) => {
    return carro.some( prod => prod.id === id)
  }
   
  return (
    <CartContext.Provider value={{
      carro,
      agregarAlCarro,
      quitarDelCarro,
      vaciarCarro,
      enCarro
    }} >    
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/productos/:categId" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
          <Route path="/cart" element={ <CartView /> } />
          <Route path="*" element={ <Navigate to="/" /> } />
       </Routes>     
      </BrowserRouter> 
    </CartContext.Provider>     

               
    
  );
}
    
export default App;
