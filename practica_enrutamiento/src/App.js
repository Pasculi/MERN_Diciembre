import './App.css';
import Home from './views/Home';
import Page from './views/Page';
import PageColor from './views/PageColor';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/:variable' element={<Page />} />
          <Route path='/:varprops/:color1/:color2' element={<PageColor />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
