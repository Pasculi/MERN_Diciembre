
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './Views/Home';

function App() {
  return (
    <div className="App">
    <h1>Home</h1>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
