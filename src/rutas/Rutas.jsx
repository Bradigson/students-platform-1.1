import { Routes, Route } from "react-router-dom";
import Page from "../page/Page";
import Inicio from "../component/Inicio";
import ProgresoSemal from "../component/ProgresoSemanal";
import Tarea from "../component/Tareas";
import Practica from "../component/Practicas";
import Calificacion from "../component/Calificacion";

const Rutas = ()=>{

    return(
        <Routes>
            <Route path='/' element={<h1>Home</h1>}/>
            <Route path='homepage' element={<Page/>}>
                <Route path='inicio' element={<Inicio/>}/>
                <Route path='progreso' element={<ProgresoSemal/>}/>
                <Route path='tarea' element={<Tarea/>}/>
                <Route path='practica' element={<Practica/>}/>
                <Route path='calificacion' element={<Calificacion/>}/>
            </Route>
        </Routes>
    )

}

export default Rutas;