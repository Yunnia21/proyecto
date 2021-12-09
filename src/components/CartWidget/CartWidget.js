import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { BsMinecart } from 'react-icons/bs';
import { ItemCount } from '../ItemCount/ItemCount'
import {CartContext} from '../../Context/CartContext'
import './Carrito.css'

export const CartWidget = () => {
    const {totalCarro, carro} = useContext(CartContext)
    return (
        <div  className={carro.length === 0 ?'hidden' :'widget'}>
            <Link to="/cart">
                <BsMinecart className="carro"/>
                <span>{totalCarro}</span>
            </Link>

        </div>
    )
}