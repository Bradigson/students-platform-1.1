import '../assets/style/Practica.scss';
import { useNavigate, Navigate, Link } from 'react-router-dom';

const Practica = ()=>{
  
    return(
        <div className='practica'>
            <div className='practica__info'>
                <h2>Practicas</h2>
                <p className='text-muted'>Para saber  cundo debe de tomar una de las practicas, 
                    espere a que la flechita se active, 
                    la misma cambiara de color y se estaría moviendo lo que indicara que la practica esta lista.<br/>
                    <span>Good Lock! 😎</span>
                </p>
            </div>
            <div className='practica__aceso'>
                <div className="alert alert-primary" role="alert">
                   <div>
                        <h3>Intervalos</h3> <span>😨</span>{' '}
                        <Link to='/homepage/interval-exam'  className="alert-link">take it</Link>
                   </div>
                   <div>
                     
                     <i className='bx bx-chevron-right intervalos'></i>
                   </div>
                </div>

                <div className="alert alert-success" role="alert">
                   <div>
                        <h3>Notas</h3> 
                        <a href="#" className="alert-link">take it</a>
                   </div>
                   <div>
                     <i className='bx bx-chevron-right'></i>
                   </div>
                </div>

                <div className="alert alert-warning" role="alert">
                   <div>
                        <h3>Escalas</h3> 
                        <a href="#" className="alert-link">take it</a>
                   </div>
                   <div>
                     <i className='bx bx-chevron-right'></i>
                   </div>
                </div>

                <div className="alert alert-danger" role="alert">
                   <div>
                        <h3>Acordes</h3> 
                        <a href="#" className="alert-link">take it</a>
                   </div>
                   <div>
                     <i className='bx bx-chevron-right'></i>
                   </div>
                </div>

                <div className="alert alert-primary" role="alert">
                   <div>
                        <h3>Sostenido</h3> 
                        <a href="#" className="alert-link">take it</a>
                   </div>
                   <div>
                     <i className='bx bx-chevron-right'></i>
                   </div>
                </div>


                <div className="alert alert-primary" role="alert">
                   <div>
                        <h3>Bemoles</h3> 
                        <a href="#" className="alert-link">take it</a>
                   </div>
                   <div>
                     <i className='bx bx-chevron-right'></i>
                   </div>
                </div>
              

              

                    
            </div>
        </div>
    )
}


export default Practica;