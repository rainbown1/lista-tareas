import './App.css';
import logoPucca from './imagenes/pucca(1).png';
import ListaDeTareas from './componentes/ListaDeTareas.jsx';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img src={logoPucca} 
         className='logo-pucca' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
