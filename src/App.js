import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
//import { AppRouter } from './router/AppRouter';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartView } from './components/CartView/CartView'



function App() {
  
   
  return (    
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

               
    
  );
}
    
export default App;
