import '../assets/style/Login.scss';
import '../assets/style/mediaqueries/LoginResponsive.scss';
import signpImg from '../assets/imgs/signup.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleSuccess, handleEmailInput, handlePasswordInput,
        handleEmailInUse, handleInvalidEmail, handleWeekPassword } from '../alerts/alertSignUp';

import app from '../firebase/Credenciales';
import {getAuth, createUserWithEmailAndPassword, signInWithEamilAndPassword} from 'firebase/auth';
import {getFirestore, addDoc, collection, deleteDoc, getDocs, doc, getDoc, setDoc} from 'firebase/firestore';
const dataBase = getFirestore(app);
const auth = getAuth(app);


const Signup = ()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    // const User = user.toLowerCase()
    const handleUserName = e=>{
        setUser(e.target.value);
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }

    const handlePassword = e=>{
        setPassword(e.target.value);
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const Email = email;
        const Password = password;

        try{
            if(Email === ''){
                handleEmailInput();
            }else if(Password === ''){
                handlePasswordInput();
            }else if(user === ''){
                alert('El campo User no puede estar Vacio');
            }else{
            await createUserWithEmailAndPassword(auth, email, password);
            
            await addDoc(collection(dataBase, 'students'),{
                email, user, password
            })
            handleSuccess();
            setEmail('');
            setPassword('');
            setUser('');
            
            }
        }catch(err){
            if(err.code === 'auth/email-already-in-use'){
                handleEmailInUse();
                setEmail('')
            }else if(err.code === 'auth/weak-password'){
                handleWeekPassword();
                setPassword('');
                setPassword('');
            }else if(err.code === 'auth/invalid-email'){
                handleInvalidEmail();
                setPassword('');
            }
        }
    }


    
    return(
        <div className="signup">
            <div className="signup__form">
                <form onSubmit={handleSubmit}>
                    <h2 className='text-center'>Sign Up</h2>
                    <div className='mt-4'>
                        <input
                        type='text'
                        placeholder="User Name"
                        className="form-control"
                        name='user'
                        value={user}
                        onChange={handleUserName}
                        />
                    </div>

                    <div className='mt-4'>
                        <input
                        type='email'
                        placeholder="Email"
                        className="form-control"
                        name='email'
                        value={email}
                        onChange={handleEmail}
                        />
                    </div>
                    <div className='mt-4'>
                        <input
                        type='password'
                        placeholder="password"
                        className="form-control"
                        name='password'
                        value={password}
                        onChange={handlePassword}
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