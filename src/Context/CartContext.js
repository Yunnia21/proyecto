import React, { createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [carro, setCarro] = useState([])
    const agregarAlCarro = (item) =>{
        setCarro([...carro, item])
    }
    const quitarDelCarro = (id) => {
        setCarro(carro.filter(prod => prod.id !== id))
    }
    const vaciarCarro = () => {
        setCarro([])
    }
    const enCarro = (id) => {
        return carro.some( prod => prod.id === id)
    }
    const totalCarro = () => {
        return carro.reduce((acc, prod) => acc + prod.count, 0)        
    }
    const totalCompra = () => {
        return carro.reduce((acc, prod) => acc + prod.precio * prod.count, 0)
    }
    return (
        <CartContext.Provider value= {{
            carro,
            agregarAlCarro,
            quitarDelCarro,
            vaciarCarro,
            enCarro,
            totalCarro,
            totalCompra 
        }}>
            {children}
            

        </CartContext.Provider>
    )
}
export default CartProvider;