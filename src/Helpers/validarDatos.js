import Swal from "sweetalert2"

export const validarDatos = (values) => {
    if (values.nombre.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Nombre demasiado corto'
        })
        return false
    }

    if (values.apellido.lenght < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Apellido demasiado corto'
        })
        return false
    }

    if (values.email.lenght < 6) {
        Swal.fire({
            icon: 'error',
            title: 'E-mail inválido'
        })
        return false
    }
    return true

}