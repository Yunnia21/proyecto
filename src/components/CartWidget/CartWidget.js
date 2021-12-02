import React, {useContext} from 'react';
import { BsMinecart } from 'react-icons/bs';
import { ItemCount } from '../ItemCount/ItemCount'
import {CartContext} from '../../Context/CartContext'

export const CartWidget = () => {
    const totalCarro = useContext(CartContext)
    return (
        <button>
            <BsMinecart/>  
            <span>{totalCarro()}</span>                     
        </button>       
    )
}