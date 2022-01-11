import React, { Component } from 'react'

function Login(props) {
    return(
        <h1>Login</h1>
    )
}

function Logout(props) {
    return(
        <h1>Logout</h1>
    )
}
export class RenderizadoCondicional extends Component {
    constructor(props) {
        super(props)
        this.state = {
            session: true
        }
    }
    render() {
        return (
            <div>
                <h2>Renderizado Condicional</h2>
                {this.state.session ? <Login /> : <Logout />}
            </div>
        )
    }
}

export default RenderizadoCondicional
