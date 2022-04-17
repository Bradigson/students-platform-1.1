import './App.css';
import Page from './page/Page';
import Rutas from './rutas/Rutas';
import {useState} from 'react';
function App() {

  const [darkMode, setDarkMode] = useState(true)

  const handleDarkmode = ()=>{
    setDarkMode(!darkMode);
  }
  return (
    <div className="container">
      <div className='darkmode'>
        <button onClick={handleDarkmode}><i class={`${ darkMode ? 'bx bxs-moon' 
        : 'bx bxs-sun'}`} ></i></button>
      </div>
      <Rutas/>
    </div>
  );
}

export default App;
