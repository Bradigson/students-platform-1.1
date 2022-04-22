import Alert from 'sweetalert2';


const handleSuccess = ()=>{
    Alert.fire({
        title:'Succesfull!',
        text : 'Tu cuenta ha sido creada exitosamente :)',
        icon : 'success',
        // confirmButtonColor:'#34c759',
        timer:'1300',
        showConfirmButton : false
    })
}


const handleEmailInput = ()=>{
    Alert.fire({
        title : 'Warning!',
        text : 'El campo email no puede estar vacio :(',
        icon : 'warning',
        iconColor : '#D35400',
        confirmButtonColor:'#D35400',
    })
}


const handlePasswordInput = ()=>{
    Alert.fire({
        title : 'Warning!',
        text : 'El campo password no puede estar vacio :(',
        icon : 'warning',
        iconColor : '#D35400',
        confirmButtonColor:'#D35400',
    })
}



const handleEmailInUse = ()=>{
    Alert.fire({
        title:'Error!',
        text : 'El email que quieres registrar ya existe :(',
        icon:'error',
        iconColor : '#d33',
        confirmButtonColor : '#d33'
    })
}



const handleWeekPassword = ()=>{
    Alert.fire({
        title:'Error!',
        text : 'El password debe de contener almenos 6 caracteres :(',
        icon:'error',
        iconColor : '#d33',
        confirmButtonColor : '#d33'
    })
}



const handleInvalidEmail = ()=>{
    Alert.fire({
        title:'Error!',
        text : 'Email no valido :(',
        icon:'error',
        iconColor : '#d33',
        confirmButtonColor : '#d33'
    })
}





  export{
 
    handleSuccess,
    handleEmailInput,
    handlePasswordInput,
    handleEmailInUse,
    handleWeekPassword,
    handleInvalidEmail
  }