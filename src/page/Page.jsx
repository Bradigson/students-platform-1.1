import '../assets/style/Page.scss';
import Header from '../component/Header';
import { Outlet } from 'react-router-dom';

const Page = ()=>{
    return(
        <div className='Page'>
            <Header/>
            <div className='componentes'>
                <div className='signout'>
                    <button className='btn btn-dark'>Sigh out</button>
                </div>
                <div className='componentes__info'>
                    
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Page;