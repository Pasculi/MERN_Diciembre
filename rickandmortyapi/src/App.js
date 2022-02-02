import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import CharacterList from './views/CharacterList';
import CharacterDetail from './views/CharacterDetail';
import Home from './views/Home';



function App() {
  return (

    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/lista-personajes">Lista de personajes</Link>
            </li>
          </ul>
          
        </nav>
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route exact path='/lista-personajes' >
            <CharacterList />
          </Route>
          <Route exact path='/personaje/:id' >
            <CharacterDetail />
          </Route>
        </Switch>

      </Router>
    </div>

  );
}

export default App;
