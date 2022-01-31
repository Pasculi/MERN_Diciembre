import React from 'react';
import { useParams } from 'react-router-dom';

const Page = (props) => {

    const variable = useParams();

    const showMessage = () => {
        if (isNaN(variable)) {
            return (
                <h1>La palabra es: {variable} </h1>
            )
        }
        else {
            return (
                <h1>El número es: {variable} </h1>
            )
        }
    }
    return (
        <div>
            {showMessage()}
        </div>
    );
}

export default Page;
