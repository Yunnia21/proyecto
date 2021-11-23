import React, { useEffect, useState } from 'react';
import { confLibrosDisp } from '../../Helpers/pedirDatos';
import { ItemDetail } from '../ItemDetail/ItemDetail';


export const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    //const { libroId } = useParams()

    useEffect(()=>{

        setLoading(true)

        confLibrosDisp()
            .then( resp => {
                setItem( resp.find( item => item.id === item.id))
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

