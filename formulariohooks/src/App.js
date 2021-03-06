import React, { useState } from 'react';
import Formulario from "./views/Formulario";
import Resultado from "./views/Resultado";

function App() {
  const [state, setState] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmarpassword: ""
  });
  return (
    <div className="App">
    <h1>Hola</h1>
      <Formulario inputs={state} setInputs={setState} />
      <Resultado data={state} />
    </div>
  );
}

export default App;
