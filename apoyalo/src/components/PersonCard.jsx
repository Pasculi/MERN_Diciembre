import React, {Component} from 'react';

class PersonCard extends Component {
     render(){
          const {primerNombre, primerApellido, edad, colorPelo} = this.props;
          return (
               <div>                
                    <h1>{primerApellido}, {primerNombre}</h1>
                    <p>Edad: {edad}</p>
                    <p>Color de pelo: {colorPelo}</p>
                    <br></br>
                    <hr></hr>
               </div>
          );
     }
}

export default PersonCard; 