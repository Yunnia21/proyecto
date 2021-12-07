import React, {useContext} from 'react';
import {BsFillTrashFill} from "react-icons/bs";
import { CartContext } from '../../Context/CartContext'

export const CartItem = ({nombre, precio, count, id}) => {
    const {quitarDelCarro} = useContext (CartContext)

    return (
        <div>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Cantidad: {count}</p>
            <button onClick={() => {quitarDelCarro(id)}}>
                <BsFillTrashFill/>
            </button>
        </div>
    
    )
}