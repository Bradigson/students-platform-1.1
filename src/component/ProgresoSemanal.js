import '../assets/style/ProgresoSemanal.scss';
import '../assets/style/mediaqueries/ProgresoResponsive.scss';

const ProgresoSemal = ()=>{
    return(
        <div>
            <table className="table table-hover text-center">
                <thead className="table-header">
                    <tr>
                        <th>Fecha</th>
                        <th>Puntos Tareas</th>
                        <th>Puntos Practicas</th>
                        <th>Total</th>
                        <th>Realizada</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0/0/0</td>
                        <td>0/0</td>
                        <td>0/15</td>
                        <td>0/0</td>
                        <td></td>
                        {/* <i className='bx bx-check' ></i> <i className='bx bx-x'></i> */}
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}


export default ProgresoSemal;