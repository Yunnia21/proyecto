import React, { useState} from 'react';



export const ItemCount = ({max, count, setCount, onAdd}) => { 
  const handleSumar = () => {
    count < max && setCount(count + 1)
  };
  const handleRestar = () => {
    count > 0 && setCount(count - 1) 
  };
  
  return (
    <div>      
        <button  className="btn btn-outline-primary" onClick={handleRestar}> - </button>
        <span className="mx-2">{count}</span>
        <button  className="btn btn-outline-primary" onClick={handleSumar}> + </button>        
        <br/>
        <button className="btn btn-success my-2" onClick={onAdd}> Agregar a la Librería </button>     
    </div>
  );
}

export default ItemCount;
    
