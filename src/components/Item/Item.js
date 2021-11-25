import React from 'react';
import { Link } from 'react-router-dom'

export const Item = ({id, nombre, precio, autor, edit, img, categ}) => {

    return (
    <article key={id} className = "card-m3" style={{width: "18rem"}}>
        <img src={img} alt={nombre}/>
        <div>
            <h3 className="card-title">{nombre}</h3>
            <p className="card-text">Precio: ${precio}</p>
            <p className="card-text">Autor: {autor}</p>
            <p className="card-text">Editorial: {edit}</p>
            <p className="card-text">Categoria: {categ}</p>
            <Link to={`/detail/${id}`}>Ver más</Link>
            <p className= "card-text">lala</p> 
        </div>
    </article> 
    )            

}
export default Item

                    