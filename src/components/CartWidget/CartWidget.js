import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import {CartContext} from '../../Context/CartContext';
import './Carrito.css';

export const CartWidget = () => {
    const {totalCarro, carro} = useContext(CartContext)
    return (
        <div  className={carro.length === 0 ?'hidden' :'widget'}>
            <Link to="/cart">
                
                <button class="btn btn-outline-light" type="submit">
                
                        <i class="bi-cart-fill me-1">Librería</i>
                        <BsFillCartFill/>
                </button>
                            
                <span class="badge bg-light text-dark ms-1 rounded-pill">{totalCarro}</span>
            </Link>

        </div>
    )
}