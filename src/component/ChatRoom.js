import '../assets/style/ChatRoom.scss';
import { useState, useEffect } from 'react';
import chat from '../firebase/CredencalesChat';
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, setDoc, getDoc, orderBy} from 'firebase/firestore';
const dataBase = getFirestore();

const ChatRoom = ()=>{


    const [message, setMessage] = useState(
        localStorage.getItem('message')
    );
    const [student, setStudents] = useState(
        localStorage.getItem('usuario')
    );
    const time = new Date().toLocaleTimeString();
    const data = new Date();
    let month = data.getMonth() + 1;
    let fecha = data.getDate() +'/'+ month + '/' + data.getFullYear();

    const handleMessage = e=>{
      setMessage(e.target.value)
    }


    const handleSubmit = async(e)=>{
        e.preventDefault();
        localStorage.setItem('message', message);
        setMessage('')
        try{
            await addDoc(collection(dataBase, 'message'),{
                message, student, time, fecha
            })
            setMessage('')

        }catch(err){
            console.log(err)
        }
    }


    // get message
    const [getMessage, setGetMessage] = useState([])
    useEffect(()=>{
        const getMessage = async()=>{
            try{

                const queryMessage = await getDocs(collection(dataBase, 'message'));
                const docs = [];
                queryMessage.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id });
                setGetMessage(docs);
            })
            }catch(err){

            }
        }
        getMessage()
    },[getMessage])


    console.log(getMessage)

    
   
    return(
        <div className='chat-room'>
            <div className='chat-room__container'>
                <div className='chat-room__meessage'> 
                    {/* {
                        getMessage.map(m=>{
                            return(
                                <div className='card' key={m.id}>
                                    <p>
                                        {m.message}
                                    </p>

                                </div>
                            )
                        })
                    } */}
                </div>
                <div className='chat-room__send'>
                   <form onSubmit={handleSubmit}>
                        <div className="input-group flex-nowrap">
                                <span className="input-group-text text-muted" id="addon-wrapping">
                                    <button className='btn '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                                        </svg>
                                    </button>
                                </span>

                                <input type="text" className="form-control" placeholder="Type your message here....." aria-label="Username" aria-describedby="addon-wrapping" name='message' value={message} onChange={handleMessage}/>

                                
                                <span className="input-group-text" id="addon-wrapping"><button className='btn '><i className='bx bxl-telegram'></i></button></span>
                        </div>
                   </form>
                </div>

            </div>
            
        </div>
    )
}


export default ChatRoom;