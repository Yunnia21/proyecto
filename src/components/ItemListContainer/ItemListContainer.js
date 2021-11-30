import React, { useEffect, useState } from "react"
import {ItemList} from '../ItemList/ItemList'
import { confLibrosDisp } from '../../Helpers/pedirDatos'
import { useParams } from 'react-router'

export const ItemListContainer = (props) => {
    const [cargando, setCargando] = useState(true)
    const [libros, setLibros] = useState([])
    const {categId} = useParams()

    useEffect(() => {
        
        setCargando(true)
        confLibrosDisp()
            .then( (resp) => {
                if (!categId){
                    setLibros(resp)
                    setCargando(false)
                }
                else {
                    setLibros(resp.filter(prod => prod.categ === categId))
                    setCargando(false)
                }
            })
            .catch( (error) => {
                console.log(error)
                setCargando(true)            
            })

    }, [categId])

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