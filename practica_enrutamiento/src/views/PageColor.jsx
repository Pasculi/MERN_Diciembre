import React from 'react';
import { useParams } from 'react-router-dom';


const PageColor = () => {

    const { palabra, color1, color2 } = useParams();

    console.log("🚀 ~ file: PageColor.jsx ~ line 8 ~ PageColor ~ useParams", useParams)

    const showMessage = () => {
        if (isNaN(palabra)) {
            console.log("🚀 ~ file: PageColor.jsx ~ line 13 ~ showMessage ~ palabra", palabra)
            return (
                <div>
                    <h1>La palabra es: {palabra} </h1>
                </div>

            )
        }
        else {
            return (
                <div>
                    <h1>El número es: {palabra} </h1>
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