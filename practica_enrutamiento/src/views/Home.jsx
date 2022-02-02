import React, { useState } from 'react';

const Home = () => {
    const [msg, setMsg ] = useState({
        message: "Welcome"
    })
    const {message} = msg
    console.log("🚀 ~ file: Home.jsx ~ line 5 ~ Home ~ msg", message)
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export default Home;
