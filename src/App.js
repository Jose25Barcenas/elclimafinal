import { useEffect, useState } from 'react';
import './App.css'; /*Importacion de los modulos necesarios en react y otros archivos locales*/
import Icons from './components/Icons';

function App() { /*Se declara el componente de funcion App, utilizamos React Hooks,
utilizamos hooks useState*/
  const [search, setSearch] = useState('roma') /*Definimos tres variables de estado: buscar, valores e iconos*/
  const [values, setValues] = useState('')
  const [icon, setIcon] = useState('')

/*Declaramos una constante URL, que contiene la URL de la API para obtener los datos meteorologicos*/
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${process.env.REACT_APP_API_KEY}`

  const getData = async () => { /*Realizamos una solicitud a una API*/
    await fetch(URL) /*Dentro de la operacion utilizamos el operador await, antes de la llamada
     fetch(URL) para esperar la solicitud a la API se complete y se reciba la respuesta*/

     /*Utilizamos then para procesar la respuesta recibida*/
      .then(response => {return response.json()}) /*obtenemos la respuesta en formato JSON*/
      .then( data => { /*Utilizamos la declaracion if-else, para verificar el codigo de respuesta*/

        if(data.cod >= 400) { /*Si el codigo recibido es mayor o igual 400, se establece el valor de 
        values en false, para indicar que la ciudad buscada no se encontro. Si el codigo de respuesta
        es valido, se extrae la informacion relevante de los datos recibidos y se actualizan
        los estados icon y values con esa informacion*/
          setValues(false)
        }else{         
          setIcon(data.weather[0].main)
          setValues(data)
        }        
      })
      .catch(error => { /*Si ocurre algun error durante la solicitud se capturan en el bloque
      catch*/
        console.log(error)
      })
  }

  const handleSearch = (e) => { /*Capturamos la entrada del usuario y actualiza el valor
  search, cuando se preciona Enter*/
    if(e.key === 'Enter'){      
      setSearch(e.target.value)
    }
  }
  useEffect(()=>{ /*Cada vez que el valor de search cambie. Esto permite realizar una nueva
  solicitud a la API cuando se realize una busqueda*/
    getData()
  },[search]) /*eslint-disable-line*/

  return ( /*Interfaz de la app*/
    <>
    <div className="container">
      <h2>Aplicación meteorologica</h2>
      <div className='row'>
        <input 
        /*Se muestra en un campo de entrada donde el usuario puede ingresar el nombre
        de una ciudad*/
          onKeyDown={handleSearch} /*Cuando precione Enter, llama a la funcio handleSearch*/
          type="text"          
          autoFocus
        />
      </div>
    </div>
              
    <div className='card'>  
      {(values) ? ( /*Si values es true, se muestra el nombre de la ciudad, la temperatura, 
      el icono correspondiente y las temperaturas maxima y minima*/
        <div className='card-container'>
          <h1 className='city-name'>{values.name}</h1>
          <p className='temp'>{values.main.temp.toFixed(0)}&deg;</p>
          <img className='icon' src={Icons(icon)} alt="icon-weather" />
          <div className='card-footer'>
            <p className='temp-max-min'>{values.main.temp_min.toFixed(0)}&deg;  |  {values.main.temp_max.toFixed(0)}&deg;</p>
          </div>
        </div>
      ) : (
        <h1>{"City not found"}</h1> /*Si values es false, se muestra el mensaje 
        Ciudad no encontrada*/
      )}

    </div>

    </>  
  );
}

export default App;
