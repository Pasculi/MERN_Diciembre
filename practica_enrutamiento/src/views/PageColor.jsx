import React from 'react';
import { useParams } from 'react-router-dom';


const PageColor = (props) => {

    const [varprops, color1, color2] = useParams();
    
    const showMessage = () => {
        if (isNaN(varprops)) {
            return (
                <h1>La palabra es: {varprops} </h1>

            )
        }
        else {
            return (
                <div>
                    <h1>El número es: {varprops} </h1>
                    {console.log(varprops)}
                </div>

            )
        }
    }

    return (
        <div style={{ backgroundColor: color2, color: color1 }}>
            <h1> {showMessage()} </h1>
        </div>
    );
}

export default PageColor;