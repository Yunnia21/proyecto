import {React, useState} from 'react'

export function ItemCount({inicial, stock, elemento}) {
           
    const [count, setCount] = useState(inicial)
    const quitar = (cantidad) => {
        setCount(count - cantidad) 
       
    }
    const onRemove=(quitar)=> { 
        console.log("Quitaste de la Librería")
    }

    
    const agregar = (cantidad) => {
        setCount(count + cantidad)
    }    
    const onAdd=(cantidad)=> {
        console.log("Agregaste a la Librería");
    }
    
    return(
        <div>
        <button className="btn_cart" onClick={() => onRemove(quitar) }
        >Quitar
        </button>
        <button className="btn_cart" onClick={() => onAdd(count)}>Agregar a la librería
        </button>
        </div>
    )
}

export default ItemCount