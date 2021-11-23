import React from 'react';
import { BsMinecart } from 'react-icons/bs';
import { ItemCount } from '../ItemCount/ItemCount'

export const CartWidget = () => {
    return (
        <button>
            <BsMinecart/>
            <span>{ItemCount}</span>           
        </button>       
    )
}