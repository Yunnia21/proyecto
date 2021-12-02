import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import {CartContext} from '../../Context/CartContext'


export const ItemDetail = ({id, nombre, precio, autor, edit, img, categ, stock}) => {
    const{agregarAlCarro} = useContext (CartContext)
    
    const [count, setCount] = useState(0)
    const [librero, setLibrero] = useState(false)
    const navigate = useNavigate()
    const handleAtras =() => {
        navigate(-1)
    };
    const handleInicio =() => {
        navigate('/')
    };
    const handleLibreria = () => {
        if (count > 0) {
            agregarAlCarro({
                id,
                nombre,
                autor,
                precio,
                img,
                count
            })
            setLibrero(true)
        }         
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre}/>            
            <p>${precio}</p>
            <p>{autor}</p>
            <p>{edit}</p>
            <p>{categ}</p>

            {
                !librero
                ? <ItemCount 
                    max={stock}
                    count={count}
                    setCount= {setCount}
                    onAdd={handleLibreria}/>
                : <Link to="/cart"> Terminar mi compra </Link>
            }
            

            <button onClick={handleAtras}>Volver</button>
            <button onClick={handleInicio}>Inicio</button>
        </div>

    )
}

export default ItemDetail;