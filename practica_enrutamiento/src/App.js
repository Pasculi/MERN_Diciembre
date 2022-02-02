import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Page from './views/Page';
import PageColor from './views/PageColor';


function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/:palabra' >
            <Page />
          </Route>
          <Route exact path='/:palabra/:color2/:color1' >
            <PageColor />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
