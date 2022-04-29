import { preguntas } from './Preguntas';
import {useState} from 'react';
import Alert from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import '../assets/style/IntervalExam.scss';
import quiz from '../assets/imgs/quizas.png';
import { opciones } from './Preguntas';
import app from '../firebase/Credenciales';
import {getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc} from 'firebase/firestore';
const dataBase = getFirestore(app);


const IntervalosExam = ()=>{

    

    const [questions, setQuestios] = useState({});
    const [student, setEstudent] = useState(
        localStorage.getItem('usuario')
    );
    const [puntos, setPuntos] = useState('');
    const navigate = useNavigate();
    const handleQuestion = e=>{
        setQuestios({
            ...questions,
            [e.target.name] : e.target.value
        })    
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        let acumulado = 0;

        if(questions.q1 === 'a'){
            acumulado ++;
        }
        
        if(questions.q2 === 'd'){
            acumulado ++;
        }
        if(questions.q3 === 'c'){
            acumulado ++;
        }

        if(questions.q4 === 'a'){
            acumulado ++;
        }

        if(questions.q5 === 'a'){
            acumulado ++;
        }

        if(questions.q6 === 'c'){
            acumulado ++;
        }

        if(questions.q7 === 'a'){
            acumulado ++;
        }

        if(questions.q8 === 'b'){
            acumulado ++;
        }

        if(questions.q9 === 'b'){
            acumulado ++;
        }

        if(questions.q10 === 'b'){
            acumulado ++;
        }

        if(questions.q11 === 'c'){
            acumulado ++;
        }

        if(questions.q12 === 'c'){
            acumulado ++;
        }

        if(questions.q13 === 'b'){
            acumulado ++;
        }

        if(questions.q14 === 'd'){
            acumulado ++;
        }

        if(questions.q15 === 'a'){
            acumulado ++;
        }
        


        Alert.fire({
            title: 'Seguro que quiere terminar y enviar?',
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: 'yes!',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Alert.fire({
                  text : 'Saved!',
                  icon : 'success',
                  showConfirmButton : false,
                  timer : '1050'
              });
               addDoc(collection(dataBase, 'examintervalo'),{
                student, acumulado
            });
                navigate('/homepage/practica')
            } else if (result.isDenied) {
              Alert.fire('Respuestas no enviadas', '', 'info')
            }
          });
       
    }
    

    return(
        <div className="intervalo-exam">
            <div className='intervalo-exam__container'>
                <div className='intervalo-exam-container__img'>
                    <img src={quiz} alt='img-quiz'/>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="exam__opciones" >
                        <h2>{preguntas.q1}</h2>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q1'value='a' onChange={handleQuestion}/>{opciones[0].A}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q1'value='b' onChange={handleQuestion}/>{opciones[0].B}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q1'value='c' onChange={handleQuestion}/>{opciones[0].C}</p>
                    </div>


                    <div className="exam__opciones" >
                        <h2>{preguntas.q2}</h2>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q2'value='a' onChange={handleQuestion}/>{opciones[1].A}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q2'value='b' onChange={handleQuestion}/>{opciones[1].B}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q2'value='c' onChange={handleQuestion}/>{opciones[1].C}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q2'value='d' onChange={handleQuestion}/>{opciones[1].D}</p>
                    </div>


                    <div className="exam__opciones" >
                        <h2>{preguntas.q3}</h2>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q3'value='a' onChange={handleQuestion}/>{opciones[2].A}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q3'value='b' onChange={handleQuestion}/>{opciones[2].B}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q3'value='c' onChange={handleQuestion}/>{opciones[2].C}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q3'value='d' onChange={handleQuestion}/>{opciones[2].D}</p>
                    </div>


                    <div className="exam__opciones" >
                        <h2>{preguntas.q4}</h2>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q4'value='a' onChange={handleQuestion}/>{opciones[3].A}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q4'value='b' onChange={handleQuestion}/>{opciones[3].B}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q4'value='c' onChange={handleQuestion}/>{opciones[3].C}</p>
                    </div>


                    <div className="exam__opciones" >
                        <h2>{preguntas.q5}</h2>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q5'value='a' onChange={handleQuestion}/>{opciones[4].A}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q5'value='b' onChange={handleQuestion}/>{opciones[4].B}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q5'value='c' onChange={handleQuestion}/>{opciones[4].C}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q5'value='d' onChange={handleQuestion}/>{opciones[4].D}</p>
                    </div>

                    <div className="exam__opciones" >
                        <h2>{preguntas.q6}</h2>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q6'value='a' onChange={handleQuestion}/>{opciones[5].A}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q6'value='b' onChange={handleQuestion}/>{opciones[5].B}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q6'value='c' onChange={handleQuestion}/>{opciones[5].C}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q6'value='d' onChange={handleQuestion}/>{opciones[5].D}</p>
                    </div>


                    <div className="exam__opciones" >
                        <h2>{preguntas.q7}</h2>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q7'value='a' onChange={handleQuestion}/>{opciones[6].A}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q7'value='b' onChange={handleQuestion}/>{opciones[6].B}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q7'value='c' onChange={handleQuestion}/>{opciones[6].C}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q7'value='d' onChange={handleQuestion}/>{opciones[6].D}</p>
                    </div>


                    <div className="exam__opciones" >
                        <h2>{preguntas.q8}</h2>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q8'value='a' onChange={handleQuestion}/>{opciones[7].A}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q8'value='b' onChange={handleQuestion}/>{opciones[7].B}</p>
                        
                    </div>


                    <div className="exam__opciones" >
                        <h2>{preguntas.q9}</h2>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q9'value='a' onChange={handleQuestion}/>{opciones[8].A}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q9'value='b' onChange={handleQuestion}/>{opciones[8].B}</p>
                      
                    </div>


                    <div className="exam__opciones" >
                        <h2>{preguntas.q10}</h2>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q10'value='a' onChange={handleQuestion}/>{opciones[9].A}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q10'value='b' onChange={handleQuestion}/>{opciones[9].B}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q10'value='c' onChange={handleQuestion}/>{opciones[9].C}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q10'value='d' onChange={handleQuestion}/>{opciones[9].D}</p>
                    </div>


                    <div className="exam__opciones" >
                        <h2>{preguntas.q11}</h2>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q11'value='a' onChange={handleQuestion}/>{opciones[10].A}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q11'value='b' onChange={handleQuestion}/>{opciones[10].B}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q11'value='c' onChange={handleQuestion}/>{opciones[10].C}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q11'value='d' onChange={handleQuestion}/>{opciones[10].D}</p>
                    </div>


                    <div className="exam__opciones" >
                        <h2>{preguntas.q12}</h2>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q12'value='a' onChange={handleQuestion}/>{opciones[11].A}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q12'value='b' onChange={handleQuestion}/>{opciones[11].B}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q12'value='c' onChange={handleQuestion}/>{opciones[11].C}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q12'value='d' onChange={handleQuestion}/>{opciones[11].D}</p>
                    </div>


                    <div className="exam__opciones" >
                        <h2>{preguntas.q13}</h2>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q13'value='a' onChange={handleQuestion}/>{opciones[12].A}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q13'value='b' onChange={handleQuestion}/>{opciones[12].B}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q13'value='c' onChange={handleQuestion}/>{opciones[12].C}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q13'value='d' onChange={handleQuestion}/>{opciones[12].D}</p>
                    </div>


                    <div className="exam__opciones" >
                        <h2>{preguntas.q14}</h2>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q14'value='a' onChange={handleQuestion}/>{opciones[13].A}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q14'value='b' onChange={handleQuestion}/>{opciones[13].B}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q14'value='c' onChange={handleQuestion}/>{opciones[13].C}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q14'value='d' onChange={handleQuestion}/>{opciones[13].D}</p>
                    </div>

                    <div className="exam__opciones" >
                        <h2>{preguntas.q15}</h2>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q15'value='a' onChange={handleQuestion}/>{opciones[14].A}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q15'value='b' onChange={handleQuestion}/>{opciones[14].B}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q15'value='c' onChange={handleQuestion}/>{opciones[14].C}</p>
                        <p className='form-check'><input type='radio' className='form-check-input' name='q15'value='d' onChange={handleQuestion}/>{opciones[14].D}</p>
                    </div>
                    <div className=' ps-4'>
                        <button className='btn btn-primary'>Terminar y enviar</button>
                    </div>
                </form>
            </div>


        </div>
    )
}


export default IntervalosExam;