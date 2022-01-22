import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 'On',
            user: {
                name: 'Jorge',
                age: 38,
                address: 'Pedro de Valdivia'
            },
            fruits: ['Frutillas', 'Moras', 'Manzanas']
        }
    }

    render() {



        console.log(this.props)
        //desectructuramos los Props del Padre
        const { message } = this.props;
        const { name, age, address } = this.state.user

        console.log(age)

        return (
            <div>
                <h2>{message}</h2>
                <h3>Soy código javascript - Home!!!</h3>
                <h4>{this.props.mensaje}</h4>
                <p>Hola {name}</p>
                <p>Edad: {age} </p>

                <button onClick={() => this.setState({ user: { ...this.state.user, age: age + 1 } })}>Aumentar edad</button>

            </div>
        );
    }
}

export default Home;
