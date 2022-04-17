import '../assets/style/Tarea.scss';
import tareaImg from '../assets/imgs/tarea-img.svg';
const Tarea = ()=>{
    return(
        <div className='tarea'>
            <div className='tarea__descripcion'>
                <div className='card'>
                    <div className='card-header'>
                        <h2>Tarea de la Semana</h2>
                        <span>asigned 16/4/2022</span>
                    </div>
                    <div className='card-body'>
                        <h3>Descripcion</h3>
                        <ol className=''>
                            <li className="list-group-item-action">practicar los intervalos</li>
                            <li className="list-group-item-action">Memorizar las notas</li>
                            <li className="list-group-item-action">Pracicar las piezas </li>
                        </ol>

                    </div>
                    <div className='card-footer text-center'>
                        <button className='btn btn-primary'>Done!</button>

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