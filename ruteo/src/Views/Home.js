import React, { useState } from 'react'
import { Link, Route, Router } from 'react-router-dom'
import VistaDos from './VistaDos'
import VistaUno from './VistaUno'

const Home = () => {
	const [estado, SetEstado] = useState();
    return (
        <div>
            <h1>Welcom to react router!</h1>
			<input type="text" value={estado} onChange={(e)=> setEstado(e.target.value)} />
            <Router>
                <Route path="/" element={<Home />} />
                <Route path="/view1" element={<VistaUno />} />
                <Route path="/view2" element={<VistaDos />} />
                <nav>
                    <Link to="/view1">Vista 1</Link>
                    <Link to="/view2">Vista 2</Link>
                </nav>
            </Router>
        </div>
    )
}

export default Home
