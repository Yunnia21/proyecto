import React, { useEffect, useState } from "react"
import {ItemList} from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { collection, getDocs, query, where } from "firebase/firestore/lite"
import {db} from '../../firebase/config'

export const ItemListContainer = (props) => {
    const [cargando, setCargando] = useState(true)
    const [libros, setLibros] = useState([])
    const {categId} = useParams()

    useEffect(() => {        
        setCargando(true)

        const productosRef = collection(db, 'productos')
        const q = categId ? query(productosRef, where('categ', '==', categId)) : productosRef

        
        getDocs(q)
            .then((collection) => {
                const elementos = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                console.log(elementos)

                setLibros(elementos)
            })
            .finally(() => {
                setCargando(false)
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