import '../assets/style/Page.scss';
import '../assets/style/mediaqueries/PageResponsive.scss';
import Header from '../component/Header';
import { Outlet, Navigate, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import app from '../firebase/Credenciales';
import {getAuth, signOut} from 'firebase/auth';
const auth = getAuth(app);



const Page = (props)=>{

    const [state, setState] = useState();
    const navigate = useNavigate();

    const handleSignout = e=>{
        
        try{
            signOut(auth);
            navigate('/', {replace : true});
            localStorage.removeItem('usuario')
        }catch(err){
            console.log(err);
        }
    }

  
    return(
        <div className='Page'>
            <Header  usuarioActive={props.usuarioActive}/>
            <div className='componentes'>
                <div className='signout'>
                    <button className='btn btn-dark' onClick={handleSignout}>Sigh out</button>
                </div>
                <div className='componentes__info'>

                    {
                        props.user || props.usuarioActive ? <Outlet/> : <Navigate to='/'/>
                    }

                </div>
            </div>
        </div>
    )
}

export default Page;