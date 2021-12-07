import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { CartItem } from './CartItem'

export const CartView = () => {

    const {carro, vaciarCarro} = useContext (CartContext)
    if (carro.length === 0){
        return(
            <div>
                <h2>No hay libros que mostrar</h2>
                <hr/>
                <Link to="/">Volver</Link>
            </div>
        )
    }
    return (
        <div>
            <h2>Cart View</h2>
            <hr/>
            <section>
                {
                    carro.map((prod) => <CartItem key={prod.id} {...prod}/>)
                }
            </section>
            <hr/>
            <div>
                <button onClick={vaciarCarro}>Vaciar</button>
                <button>Terminar Compra</button>
            </div>
            
        </div>
    )
}

export default CartView;