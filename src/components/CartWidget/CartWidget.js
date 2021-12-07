import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { BsMinecart } from 'react-icons/bs';
import { ItemCount } from '../ItemCount/ItemCount'
import {CartContext} from '../../Context/CartContext'
import './Carrito.css'

export const CartWidget = () => {
    const {totalCarro, cart} = useContext(CartContext)
    return (
        <div className={cart.length === 0 ?'hidden widget' : 'widget'}>
            <Link to="/cart">
                <BsMinecart/>
                <span>{totalCarro}</span>
            </Link>

        </div>
    )
}