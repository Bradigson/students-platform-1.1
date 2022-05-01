import '../assets/style/Admin.scss';
import app from '../firebase/Credenciales';
import Alert from 'sweetalert2';
import { useState, useEffect } from 'react';
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore';
const dataBase = getFirestore(app);


const Admin = ()=>{
    const [students, setStudents] = useState([]);

    useEffect(()=>{

        const getStudents = async()=>{
            try{
                const queryStudents = await getDocs(collection(dataBase, 'students'))
                const docs = [];
                queryStudents.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id});

            }) 
                setStudents(docs);

            }catch(err){
                console.log(err)
            }
        }
         getStudents();
    },[]);


    const handleDelete = ()=>{
        Alert.fire({
            title : 'Error!',
            text : 'Funcion de eliminar usuario no avilitada',
            icon : 'error',
            confirmButtonColor : '#d33'
        })
    }
    const handleUpdate = ()=>{
        Alert.fire({
            title : 'Error!',
            text : 'Funcion de Actualizar usuario usuario no avilitada',
            icon : 'error',
            confirmButtonColor : '#d33'
        })
    }

    // console.log(students);
    return(
        <article className='admin'>
            {
                students !== null ? (
                    students.map(info=>{
                        return(
                            <div className='card ' key={info.id}>
                                <div className='card-body'>
                                    <h2>{info.user}</h2>
                                    <p><b>Email:</b>{' '}{info.email}</p>
                                    <p><b>Id:</b>{' '}{info.id}    </p>
                                    <p><b>Password:</b>{' '}{info.password}</p>
                                </div>
                                <div className='card-footer text-center'>
                                    <button className='btn btn-warning' onClick={handleUpdate}>Update</button>{' '}
                                    <button className='btn btn-danger' onClick={()=>handleDelete()}>Delete</button>
                                </div>
                            </div>
                        )
                    })

                ) :
                (
                    <div class="spinner-grow text-primary" role="status">
                         <span class="visually-hidden">Loading...</span>
                    </div>
                                    )
                
            }
        </article>
    )
}

export default Admin;