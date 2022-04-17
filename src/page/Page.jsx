import '../assets/style/Page.scss';
import Header from '../component/Header';
import { Outlet, Navigate} from 'react-router-dom';
import {useState} from 'react';

const Page = ()=>{

    const [state, setState] = useState(true);
    return(
        <div className='Page'>
            <Header/>
            <div className='componentes'>
                <div className='signout'>
                    <button className='btn btn-dark'>Sigh out</button>
                </div>
                <div className='componentes__info'>
                    
                    {
                        state ? <Outlet/> : <Navigate to='/'/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Page;