import React, { Component } from 'react';

class Classcomponent extends Component {
    render() {
        const msg = "Soy código Javascript :)";
        return (
            <div>
                <h1>Saludos desde el componente de clase</h1>
                <h2>{msg}</h2>
            </div>
        );
    }
}

export default Classcomponent;

