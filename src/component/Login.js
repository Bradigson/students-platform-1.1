import '../assets/style/Login.scss';
import loginImg from '../assets/imgs/login-img.svg';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/style/mediaqueries/LoginResponsive.scss';
import { handleUserNotFound, handleWrongPassword,
        handleEmailEmpty, handlePasswordEmpty, handleUserBanned } from '../alerts/alertLogIn';
import { useState } from 'react';
import app from '../firebase/Credenciales';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
const auth = getAuth(app);



const Login = (props)=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEamil = e=>{
        setEmail(e.target.value);
    }
    const handlePassword = e=>{
        setPassword(e.target.value);
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const Email = email;
        const Password = password;

        try{
            if(Email === ''){
                handleEmailEmpty();
            }else if(Password === ''){

                handlePasswordEmpty();
            }else{
                await signInWithEmailAndPassword(auth, Email, Password );
                setEmail('');
                setPassword('');
                navigate('homepage/inicio')
            }

        }catch(err){
            if(err.code === 'auth/user-not-found'){
                handleUserNotFound();
            }else if(err.code === 'auth/wrong-password'){
                handleWrongPassword();
            }else if(err.code === 'auth/network-request-failed'){
                alert('no network')
            }else if(err.code === 'auth/too-many-requests'){
                alert('has ecedido el limite de intento, esper 5 minutos')
            }else{
                handleUserBanned();
            }
        }
}
    
    return(
        <div className="login">
            <div className='loging__form'>
                <form onSubmit={handleSubmit}>
                    <h2 className='text-center'>Log In</h2>
                    <div className='mt-4'>
                        <input
                        type='email'
                        className='form-control'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={handleEamil}
                        />
                    </div>
                    <div className='mt-4'>
                        <input
                        type='Password'
                        className="form-control"
                        name='password'
                        placeholder="password"
                        value={password}
                        onChange={handlePassword}
                        />
                    </div>
                    <div className='mt-4 text-center'>
                        <button className='btn btn-primary'>LOGIN</button>
                    </div>
                </form>
                <div className='mt-5 text-center'>
                    <span>Don't you have an accnout?</span>{' '}
                    <Link to='signup'>Sign up</Link>   
                </div>
            </div>
            <div className='login__img'>
                <img src={loginImg} alt='login-img'/>
            </div>
        </div>
    )
}



export default Login;