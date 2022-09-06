import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { Alumno } from './Alumno';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/generalSlice';

function App() {
  
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({ name: "Jeffry", edad: 12});
  const [array, setArray] = useState(['Toyota']);
  const [arryObj, setArryObj] = useState([{nombre: "Joel", edad: 15}, {nombre: "Daniel", edad: 22}]);

  const dispatch = useDispatch();
  const { value } = useSelector(state => state.general);

  const funcInicio = () => {
    console.log("hola");
    console.log(value);
  }

  useEffect(() => {
    funcInicio();
  }, [])

  useEffect(() => {
    console.log("se agrego algo")
  }, [array])
  

  const funcCount1 = (e) => {
    setCount(count + 1);
    dispatch(increment(5));
  }

  const funcObj = (valor) => {
    setObj({...obj, edad: valor});
  }

  const funcArray = () => {
    setArray([...array, 'Mazda']);
  }

  const funcNotas = (dato) => {
    const indexItem = arryObj.findIndex(item => item.nombre == dato.nombre);
    dato.notas = [25, 58, 34];

    setArryObj(arryObj.map((item, i) => {
      return i == indexItem ? dato : item;
    }));
  }

  return (
    <div className="App">
      <button onClick={() => funcCount1()}>
        Poner
      </button>
      <br/>
      {count}
      <br />
      <button onClick={() => funcObj(22)}>Cambiar edad</button>
      <br />
      {JSON.stringify(obj)}
      <br />
      <button onClick={() => funcArray()}>Agregar item</button>

      <ol>
        {
          array.map(val => (
            <li key={val}>{val}</li>
          ))
        }
      </ol>

      <ol>
        {
          arryObj.map(alumno => (
            <Alumno dato={alumno} funcAgregarNotas={funcNotas} />
          ))
        }
      </ol>

    </div>
  )
}

export default App
