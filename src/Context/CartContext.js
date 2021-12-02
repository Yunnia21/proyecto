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
        return carro.reduce((acc, prod) => acc + prod.cantidad, 0)        
    }
    const totalPrecioCarro = () => {
        return carro.reduce((acc, prod) => acc + prod.precio * prod.cantidad)
    }
    return (
        <CartContext.Provider value= {{
            carro,
            agregarAlCarro,
            quitarDelCarro,
            vaciarCarro,
            enCarro,
            totalCarro 
        }}>
            {children}
            

        </CartContext.Provider>
    )
}
export default CartProvider;