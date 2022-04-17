import '../assets/style/Login.scss';
import signpImg from '../assets/imgs/signup.svg';
import { Link } from 'react-router-dom';

const Signup = ()=>{
    return(
        <div className="signup">
            <div className="signup__form">
                <form>
                    <h2 className='text-center'>Sign Up</h2>
                    <div className='mt-4'>
                        <input
                        type='email'
                        placeholder="Email"
                        className="form-control"
                        name='email'
                        />
                    </div>
                    <div className='mt-4'>
                        <input
                        type='password'
                        placeholder="password"
                        className="form-control"
                        name='password'
                        />
                    </div>
                    <div className='mt-4 text-center'>
                        <button className="btn btn-primary">SIGNUP</button>
                    </div>
                </form>
                <div className='mt-5 text-center'>
                    <span>Already have an accnout?</span>{' '}
                    <Link to='/'>Log in</Link>
                </div>
            </div>
            <div className="signup__img">
                <img src={signpImg} alt='signup-img'/>
            </div>
        </div>
    )
}


export default Signup;