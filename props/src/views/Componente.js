import React, { Component } from 'react';


const Componente = props => {
    return (
        <div>
        <h1>{props.msg}</h1>
        </div>
    );
}

/*
function Componente(props) {
  return (
    <div>
      <h1>{props.msg}</h1>
    </div>
  );
}
*/

/*class Componente extends Component{
    render() {
        return(
            <h2>{this.props.msg}</h2>
        )
    }
}
*/
export default Componente;