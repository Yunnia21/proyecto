import React, { useEffect, useState } from 'react';
import { confLibrosDisp } from '../../Helpers/pedirDatos';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router'


export const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(()=>{

        setLoading(true)

        confLibrosDisp()
            .then( resp => {
                setItem( resp.find( prod => prod.id === Number(itemId)) )
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [])

    return (
        <div className="container my-5">
            {
                loading
                 ? <h2>Cargando...</h2>
                 : <ItemDetail {...item}/>
            }


        </div>
    )
}
export default ItemDetailContainer;

