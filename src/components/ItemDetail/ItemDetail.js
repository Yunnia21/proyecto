import React from 'react';


export const ItemDetail = ({id, nombre, precio, autor, edit, img, cate}) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre}/>            
            <p>Acá esta lo del detalle // {precio}</p>
            <p>No sé como hacer que abra otra ventana // ${autor}</p>
            <p>Sin usar Routing // {edit}</p>
            <p>Escribo esto para que se vea que es la descripción // {cate}</p>
        </div>

    )
}