import { NavLink } from "react-router-dom";
import '../assets/style/Header.scss';
import '../assets/style/mediaqueries/HeaderResponsive.scss';
import logo from '../assets/imgs/logo.png';
import user from '../assets/imgs/user.jpg';
const Header = (props)=>{
    return(
        <header className='header'>
            <div className="header__logo-container">
                <div className='logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className="perfil">
                    <div className="perfil__img">
                        <img src={user} alt="img-perfil"/>
                    </div>
                    <div>
                        <h3>{props.usuarioActive}</h3>
                        <span>Estudiante de Piano</span>
                    </div>
                </div>
            </div>
            <div className="navbar-cointainer">
                <nav className="navbar">
                    <ul className="menu-list">
                        <li><i className='bx bxs-home'></i><NavLink to='inicio' className='nav-link nl-1'>Inicio</NavLink></li>
                        <li><i className='bx bx-trending-up' ></i><NavLink to='progreso' className='nav-link nl-2'>Progreso Semanal</NavLink></li>
                        <li><i className='bx bxs-edit-alt' ></i><NavLink to='tarea' className='nav-link nl-3'>Tareas</NavLink></li>
                        <li><i className='bx bxs-edit' ></i><NavLink to='practica' className='nav-link nl-4'>Practicas</NavLink></li>
                        <li><i className='bx bx-task' ></i><NavLink to='calificacion' className='nav-link nl-5'>Calificaciones</NavLink></li>
                    </ul>
                </nav>
            </div>



           <div className="menu-boostrap">
                <nav className="navbar navbar-expand-lg navbar-dark navbar-mobile">
                                <div className="container-fluid">
                                    <a className="navbar-brand" href="#">Miraculous Musica</a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className='bx bx-menu'></i>
                                    </button>

                                    <div className="collapse navbar-collapse  mt-2" id="navbarSupportedContent">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li><NavLink to='inicio' className='nav-link nl-1'>Inicio</NavLink></li>
                                                <li><NavLink to='progreso' className='nav-link nl-2'>Progreso Semanal</NavLink></li>
                                                <li><NavLink to='tarea' className='nav-link nl-3'>Tareas</NavLink></li>
                                                <li><NavLink to='practica' className='nav-link nl-4'>Practicas</NavLink></li>
                                                <li><NavLink to='calificacion' className='nav-link nl-5'>Calificaciones</NavLink></li>
                                            </ul>
                                    </div>
                                </div>
                    </nav>
           </div>
        </header>
    )
}


export default Header;