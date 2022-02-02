import React from 'react';
import { useParams } from 'react-router-dom';

const Page = () => {

    const {palabra} = useParams();

    const showMessage = () => {
        if (isNaN(palabra)) {
            return (
                <h1>La palabra es: {palabra} </h1>
            )
        }
        else {
            return (
                <h1>El número es: {palabra} </h1>
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
