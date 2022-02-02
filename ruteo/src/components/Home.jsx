import React, {useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import VistaUno from '../Views/VistaUno';
import VistaDos from '../Views/VistaDos';

const Home = () => {
const [estado, setEstado] = useState();

    return (
        <div className="container">
            <h1>Welcom to React Router</h1>

            <input type="text" value={estado} onChange={(e)=>setEstado(e.target.value)}/>
            <Routes>
                <Route path="/vista1" element={<VistaUno />} />
                <Route path="/vista2/:nombre" element={<VistaDos />} />
            </Routes>
            <nav>
                <Link to="/vista1">Vista 1</Link>
                <Link to={`/vista2/${estado}`}>Vista 2</Link>
            </nav>
        </div>
    );
};

export default Home;
