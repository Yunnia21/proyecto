import React from 'react';
import { useNavigate } from 'react-router';


export const ItemDetail = ({id, nombre, precio, autor, edit, img, categ}) => {
    const navigate = useNavigate()
    const handleAtras =() => {
        navigate(-1)
    };
    const handleInicio =() => {
        navigate('/')
    };

    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre}/>            
            <p>Acá esta lo del detalle // {precio}</p>
            <p>No sé como hacer que abra otra ventana // ${autor}</p>
            <p>Sin usar Routing // {edit}</p>
            <p>Escribo esto para que se vea que es la descripción // {categ}</p>

            <button onClick={handleAtras}>Volver</button>
            <button onClick={handleInicio}>Inicio</button>
        </div>

    )
}