import Alert from 'sweetalert2';


const handleUserNotFound = ()=>{
    Alert.fire({
        title:'Error',
        text : 'Usuario no encontrado :(',
        icon : 'error',
        confirmButtonColor: '#d33'
    })
}


const handleWrongPassword = ()=>{
    Alert.fire({
        title:'Error',
        text : 'Contraseña incorrecto :(',
        icon : 'error',
        confirmButtonColor: '#d33'
    })
}


const handleEmailEmpty = ()=>{
    Alert.fire({
        title:'Error',
        text : 'El campo email esta vacio :(',
        icon : 'error',
        confirmButtonColor: '#d33'
    })
}

const handlePasswordEmpty = ()=>{
    Alert.fire({
        title:'Error',
        text : 'El campo password esta vacio :(',
        icon : 'error',
        confirmButtonColor: '#d33'
    })
}



export{
    handleUserNotFound,
    handleWrongPassword,
    handleEmailEmpty,
    handlePasswordEmpty
}