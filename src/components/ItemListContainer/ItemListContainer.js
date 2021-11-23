import React, { useEffect, useState } from "react"
import {ItemList} from '../ItemList/ItemList'
import { confLibrosDisp } from '../../Helpers/pedirDatos'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemListContainer = (props) => {
    const [cargando, setCargando] = useState(false)
    const [libros, setLibros] = useState([])

    useEffect(() => {
        
        setCargando(true)
        confLibrosDisp()
            .then( (resp) => {
                setLibros(resp)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setCargando(false)
            })

    }, [])

    return (
        <>
            {
                cargando 
                    ? <h2>Cargando...</h2> 
                    : <ItemList items={libros}/>
                    
            }  
                 
        </>
    )
}

    

export default ItemListContainer