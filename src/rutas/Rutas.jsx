import { Routes, Route, Navigate } from "react-router-dom";
import Page from "../page/Page";
import Inicio from "../component/Inicio";
import ProgresoSemal from "../component/ProgresoSemanal";
import Tarea from "../component/Tareas";
import Practica from "../component/Practicas";
import Calificacion from "../component/Calificacion";
import Login from "../component/Login";
import Signup from "../component/Signup";
import Error404 from "../component/Error404";

const Rutas = (props)=>{

  
    
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='homepage' element={<Page user={props.user}  usuarioActive={props.usuarioActive}/>}>
                <Route path='inicio' element={<Inicio/>}/>
                <Route path='progreso' element={<ProgresoSemal/>}/>
                <Route path='tarea' element={<Tarea/>}/>
                <Route path='practica' element={<Practica/>}/>
                <Route path='calificacion' element={<Calificacion/>}/>
            </Route>
            <Route path='*' element={<Error404/>}/>
        </Routes>
    )

}

export default Rutas;