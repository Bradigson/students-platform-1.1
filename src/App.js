import './App.css';
import Rutas from './rutas/Rutas';
import {useState, useEffect} from 'react';
import app from './firebase/Credenciales';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
const auth = getAuth(app);

function App() {

  const [user, setUser] = useState('');
  const [usuarioActivo, setUsuarioActivo] = useState(
    localStorage.getItem('usuario')
  );
  useEffect(()=>{
    onAuthStateChanged(auth, (usuario)=>{
      if(usuario){
        setUser(usuario);
        localStorage.setItem('usuario', usuario.email)
      }
    })
  },[])

  return (
    <div className="container">
    
      <Rutas user={user ? user.email : user} usuarioActive={usuarioActivo}/>
      
    </div>
  );
}

export default App;
