import '../assets/style/Calificacion.scss';
import calificacionImg from '../assets/imgs/calificaciion.svg';
import award from '../assets/imgs/award1.png';
const Calificacion = ()=>{
    return(
        <div className='calificacion'>
            <div className='calificacion__card'>
                <div className="card">
                    <div className="card-body text-center">
                        <h3>35</h3>
                        <div>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star up'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                        <h4>Excelente!</h4>
                        <p>Felicidades tienes una muy buena calificacion,
                            sigue practicando
                        </p>
                        <div className='award-container'>
                            <div className='card-award'>
                                <img src={award} alt='award-img'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='calificacion__img'>
                <img src={calificacionImg} alt='calificacion-img'/>

            </div>
        </div>
    )
}


export default Calificacion;