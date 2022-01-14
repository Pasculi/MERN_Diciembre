import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './views/Componente';
import Propiedades from './views/Propiedades';
import Estado from './views/Estado';
import RenderizadoCondicional from './views/RenderizadoCondicional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <section>
          <hr />
          <Componente msg="Hola soy un Componente desde una props" />
          <hr />
          <Propiedades
            cadena="Soy una cadena"
            numero={48}
            arreglo={[1, 4, 7]}
            booleano={false}
            objeto={{ nombre: "Jorge", apellido: "Sepúlveda", email: "beimone@gmail.com" }}
            reactElelment={<h3>Soy un elemento JSX</h3>}
            funcion={(num) => (num*num)}
            componente={<Componente msg="Soy un componente pasado por props"/>}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
        </section>
      </header>


    </div>
  );
}

export default App;
