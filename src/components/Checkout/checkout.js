import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router'
import { CartContext } from '../../Context/CartContext'
import { db } from '../../firebase/config'
import { validarDatos } from '../../Helpers/validarDatos'
import { collection, Timestamp, where, addDoc, writeBatch, query, documentId, getDocs} from 'firebase/firestore/lite'
//import Swal from 'sweetalert2'

export const Checkout = () => {
    
   const {carro, totalCompra} = useContext(CartContext)

   const [values, setValues] = useState({
       nombre: '',
       apellido: '',
       email: ''
   })
   const handleInputChange = (e) => {
       console.log(e.target.name)

       setValues({
           ...values,
           [e.target.name]: e.target.value
           
       })
   }

   const handleSubmit = async (e) =>    {
       e.preventDefault()
       if (!validarDatos(values)) { return }
       const orden = {
        buyer: {...values},
        items: carro,
        total: totalCompra(),
        date: Timestamp.fromDate(new Date())       
    }
    const ordenRef = collection(db, "orders")
    const productosRef = collection(db, "productos")
    const batch = writeBatch(db)
    const q = query(productosRef, where(documentId(), 'in', carro.map(el => el.id)))
    const productos = await getDocs(q)
    const outOfStock = []
    productos.docs.forEach((doc) => {
        const itemToUpdate = carro.find((prod) => prod.id === doc.id)
        if (doc.data().stock >= itemToUpdate.count) {
            batch.update(doc.ref, {
                stock: doc.data().stock - itemToUpdate.count
            })
        } else {
            outOfStock.push(itemToUpdate)
        }
    })
    if (outOfStock.length === 0) {
        batch.commit()
    } else {
        console.log(outOfStock)
    }
    /*addDoc(ordenRef, orden)
        .then((res) => {
            console.log(res.id)
        })
       console.log(orden)*/
   }
    return(
        <>
            {carro.length === 0 
                ? <Navigate to="/" />
                :
                    <div>
                        <h2>Pedido</h2>
                        <hr/>
                        <form className="container m-5" onSubmit={handleSubmit}>
                        <input
                            onChange={handleInputChange}
                            name="nombre"
                            value={values.nombre}
                            className="form-control my-2"
                            type="text"
                            placeholder="nombre"
                        />
                        {values.nombre.length < 4 && <small>Nombre inválido</small>}

                        <input
                            onChange={handleInputChange}
                            name="apellido"
                            value={values.apellido}
                            className="form-control my-2"
                            type="text"
                            placeholder="apellido"
                        />
                        {values.apellido.length < 4 && <small>Apellido inválido</small>}

                        <input
                            onChange={handleInputChange}
                            name="email"
                            value={values.email}
                            className="form-control my-2"
                            type="email"
                            placeholder="email"
                        />
                        {values.email.length < 4 && <small>Email inválido</small>}

                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                        
                    </div> }
        </>
    )
}
