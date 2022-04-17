import '../assets/style/Login.scss';
import loginImg from '../assets/imgs/login-img.svg';
import { Link } from 'react-router-dom';

const Login = (props)=>{
    
    return(
        <div className="login">
            <div className='loging__form'>
                <form>
                    <h2 className='text-center'>Log In</h2>
                    <div className='mt-4'>
                        <input
                        type='email'
                        className='form-control'
                        name='email'
                        placeholder='Email'
                        />
                    </div>
                    <div className='mt-4'>
                        <input
                        type='Password'
                        className="form-control"
                        name='password'
                        placeholder="password"
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