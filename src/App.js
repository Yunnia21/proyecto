import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
//import { AppRouter } from './router/AppRouter';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { React, useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartView } from './components/CartView/CartView'
import { CartProvider} from './Context/CartContext'
import { Checkout } from './components/Checkout/checkout';




function App() {
  
  
   
  return (
    <CartProvider>      
       
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/productos/:categId" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
          <Route path="/cart" element={ <CartView /> } />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/checkout" element={ <Checkout/>}/>
       </Routes>     
      </BrowserRouter> 

    </CartProvider>

                  
    
  );
}
    
export default App;
