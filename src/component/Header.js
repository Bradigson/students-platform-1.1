import { NavLink } from "react-router-dom";
import '../assets/style/Header.scss';
import logo from '../assets/imgs/logo.png';
import user from '../assets/imgs/user.jpg';
const Header = (props)=>{
    return(
        <header className='header'>
            <div>
                <div className='logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className="perfil">
                    <div className="perfil__img">
                        <img src={user} alt="img-perfil"/>
                    </div>
                    <h3>{props.usuarioActive}</h3>
                    <span>Estudiante de Piano</span>
                </div>
            </div>
            <nav className="navbar">
                <ul className="menu-list">
                    <li><i className='bx bxs-home'></i><NavLink to='inicio' className='nav-link nl-1'>Inicio</NavLink></li>
                    <li><i className='bx bx-trending-up' ></i><NavLink to='progreso' className='nav-link nl-2'>Progreso Semanal</NavLink></li>
                    <li><i className='bx bxs-edit-alt' ></i><NavLink to='tarea' className='nav-link nl-3'>Tareas</NavLink></li>
                    <li><i className='bx bxs-edit' ></i><NavLink to='practica' className='nav-link nl-4'>Practicas</NavLink></li>
                    <li><i className='bx bx-task' ></i><NavLink to='calificacion' className='nav-link nl-5'>Calificaciones</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header;