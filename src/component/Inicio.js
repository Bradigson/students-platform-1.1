import '../assets/style/Inicio.scss';
import '../assets/style/mediaqueries/InicioResponsive.scss';
import inicioImg from '../assets/imgs/inicioImg.svg';
import { handleNoificacion } from '../alerts/Notificacion';


const Inicio = ()=>{

    const handleNotification = ()=>{
        handleNoificacion();
    }
 
    return(
        <div className='inicio'>
            <div className='inicio__content1'>
                <h2>Miraculous Musica</h2>
                <p className='text-muted'>
                    Miraculous Musica es una plataforma con fines educativos done el estudiante podra expandir y mejorar
                    los conocimientos adquiridos en clase, de la misma manera que se les pide ser lo más 
                    discretos con el contenido de la misma. 
                </p>
                <a className='btn btn-primary' href="https://emailbradigson.netlify.app/" target='_BLANK'>Email your teacher</a><br/><br/>

                <button type="button" class="btn btn-primary position-relative" onClick={handleNotification}>
                    Notificación
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        1
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </button>
            </div>
            <div className='inicio__content2'>
                <img src={inicioImg} alt='inicio-img'/>
            </div>

        </div>
    )
}


export default Inicio;