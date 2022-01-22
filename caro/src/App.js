import './App.css';
import React, { useState } from 'react';
import ComponenteFuncional from './views/ComponenteFuncional';

import Home from './views/Home';
import Login from './views/Login';

function App() {

  const msg = 'Soy código Javascript desde el Padre App - con destructuración!!';
  const [age, setAge] = useState(1);
  const [text, setText] = useState('');

  return (
    <div className="App">
    <Login />
      <h1>Hello ninjas!!!</h1>
      <h1><Home message={text} /></h1><hr />
      <ComponenteFuncional edad={age} suma={setAge} text={text} setText ={setText} />

    </div>
  );
}

export default App;
