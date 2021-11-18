import React from 'react';
import {Container,Row} from 'react-bootstrap'
import {Item} from '../Item/Item'

export const ItemList = ({items}) => {
    return (
        <Container>
            <h2>Libros</h2>
            <hr/>
            <Row>
            {items.map((prod) => <Item key={prod.id} {...prod}/>)}      
                
            </Row>
        </Container>
    )
}
export default ItemList