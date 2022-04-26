import '../assets/style/Inicio.scss';
import '../assets/style/mediaqueries/InicioResponsive.scss';
import inicioImg from '../assets/imgs/inicioImg.svg';
import Alert from 'sweetalert2';


const Inicio = ()=>{
    const handleTeacher = ()=>{
        Alert.fire({
            title:'Warning',
            text:'Esta funcion aun no esta disponible 🙂',
            icon:'warning'
        })
    }
    return(
        <div className='inicio'>
            <div className='inicio__content1'>
                <h2>Miraculous Musica</h2>
                <p className='text-muted'>
                    Miraculous Musica es una plataforma con fines educativos done el estudiante podra expandir y mejorar
                    los conocimientos adquiridos en clase, de la misma manera que se les pide ser lo mas 
                    discretos con el contenido de la misma. 
                </p>
                <a className='btn btn-primary' href="https://emailbradigson.netlify.app/" target='_BLANK'>Email your teacher</a>
            </div>
            <div className='inicio__content2'>
                <img src={inicioImg} alt='inicio-img'/>
            </div>

        </div>
    )
}


export default Inicio;