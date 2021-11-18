import React from 'react';
import {Container,Row} from 'react-bootstrap'

export const ItemList = ({libros}) => {
    return (
        <Container>
            <h2>Manuales</h2>
            <hr/>
            <Row>
                {libros.map((prod) => (
                    <div key={prod.id} className = "card-m3">
                        <img src={prod.img} alt={prod.nombre}/>
                        <div>
                            <h3 className="card-title">{prod.nombre}</h3>
                            <p className="card-text">Precio: ${prod.precio}</p> 

                        </div>
                    </div> 

                )
            </Row>
        </Container>
    )
}