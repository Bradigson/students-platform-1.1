import { Link } from 'react-router-dom';
import error404 from '../assets/imgs/Error404.jpg';
import '../assets/style/Error404.scss';

const Error404 = ()=>{
    return(
        <div className='error404'>
            <img src={error404} alt='error404'/>
            <div className='error404__redirect text-center'>
                <h3>Page not Found</h3>
                <Link replace to='/'>Go Back</Link>
            </div>

        </div>
    )
}


export default Error404;