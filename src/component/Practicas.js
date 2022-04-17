import '../assets/style/Practica.scss';
const Practica = ()=>{
    return(
        <div className='practica'>
            <div className='practica__info'>
                <h2>Practicas</h2>
                <p className='text-muted'>Para saber cuando cundo debe de tomar una de las practi, 
                    espere a que la flechita se acti, 
                    la misma cambiara de color y se estara moviendo, lo que indicara que la practica esta lista.<br/>
                    <span>Good Lock!</span>
                </p>
            </div>
            <div className='practica__aceso'>
                <div class="alert alert-primary" role="alert">
                   <div>
                        <h3>Intervalos</h3> 
                        <a href="#" class="alert-link">take it</a>
                   </div>
                   <div>
                     <i className='bx bx-chevron-right'></i>
                   </div>
                </div>

                <div class="alert alert-success" role="alert">
                   <div>
                        <h3>Notas</h3> 
                        <a href="#" class="alert-link">take it</a>
                   </div>
                   <div>
                     <i className='bx bx-chevron-right'></i>
                   </div>
                </div>

                <div class="alert alert-warning" role="alert">
                   <div>
                        <h3>Escalas</h3> 
                        <a href="#" class="alert-link">take it</a>
                   </div>
                   <div>
                     <i className='bx bx-chevron-right'></i>
                   </div>
                </div>

                <div class="alert alert-danger" role="alert">
                   <div>
                        <h3>Acordes</h3> 
                        <a href="#" class="alert-link">take it</a>
                   </div>
                   <div>
                     <i className='bx bx-chevron-right'></i>
                   </div>
                </div>

                <div class="alert alert-primary" role="alert">
                   <div>
                        <h3>Sostenido</h3> 
                        <a href="#" class="alert-link">take it</a>
                   </div>
                   <div>
                     <i className='bx bx-chevron-right'></i>
                   </div>
                </div>


                <div class="alert alert-primary" role="alert">
                   <div>
                        <h3>Bemoles</h3> 
                        <a href="#" class="alert-link">take it</a>
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