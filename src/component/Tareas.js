import '../assets/style/Tarea.scss';
import '../assets/style/mediaqueries/TareaResponsive.scss';
import Alert from 'sweetalert2';
import tareaImg from '../assets/imgs/tarea-img.svg';
const Tarea = ()=>{

    const handlePractique = ()=>{
        Alert.fire(
            {
                title: 'So sorry! π',
                text : 'Esta funcion aun no la he abilitado π, pero lo estara pronto π€ do not despair. ',
                icon : 'info'
            }
        )
    }
    return(
        <div className='tarea'>
            <div className='tarea__descripcion'>
                <div className='card'>
                    <div className='card-header'>
                        <h2>Gana por practicar <span className='gana'>π€</span></h2>
                        <span>asigned 16/4/2022</span>
                    </div>
                    <div className='card-body'>
                        <h3>Descripcion</h3>
                        <p>
                            Esta opcion le genra 2 puntos extraπ al indicar practique.
                            Ojo π, tenga pendiente que si preciona practique sin haber practicado y en clase no presenta su tarea como que practico,
                            perdera el doble de lo ganado π­.
                        </p>

                    </div>
                    <div className='card-footer text-center'>
                        <button className='btn btn-primary' onClick={handlePractique}>Practique! π€</button>

                    </div>

                </div>

            </div>
            <div className='tarea__img'>
                <img src={tareaImg} alt='tarea-img'/>
            </div>
        </div>
    )
}


export default Tarea;