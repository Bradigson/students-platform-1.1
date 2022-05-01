import Alert from 'sweetalert2';

const handleNoificacion = ()=>{
    Alert.fire({
        title : 'Notificación 😱',
        text : 'Examen de los intervalos activado el 29/04/2022 hasta 7/05/2022 ',
        footer : 'Goog Luck! 😎',
        icon : 'info'
    })
}


export{
    handleNoificacion
}