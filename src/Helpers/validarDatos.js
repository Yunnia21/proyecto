import Swal from "sweetalert2"

export const validarDatos = (values) => {
    if (values.nombre.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Nombre Inválido'
        });
        return false;
    };

    if (values.apellido.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Apellido Inválido'
        });
        return false;
    };

    if (values.email.length < 6) {
        Swal.fire({
            icon: 'error',
            title: 'Tienes que ingresar un email válido'
        });
        return false;
    };
    return true;

};