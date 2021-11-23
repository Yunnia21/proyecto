import React, { useState} from 'react';



export const ItemCount = () => {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(10);

  return (
    <div>
      <h1>Elementos en la Librería</h1>     

      <div>
        <input
          disabled={count == stock ? true : false}
          onClick={() => setCount(count + 1)}
          type="button"
          value="Agregame"
        />
        <br />
        <input
          disabled={count <= 0 ? true : false}
          onClick={() => setCount(count - 1)}
          type="button"
          value="Quítame"
        />
        <br />
        Contador en: {count}
      </div>
      <div/>
    </div>
  );
}
    
