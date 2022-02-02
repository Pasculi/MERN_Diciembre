import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Next = () => {

    const [next, setNext] = useState(1);

    const getNextPage = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${next + 1}`);
        console.log("🚀 ~ file: Next.jsx ~ line 11 ~ getNextPage ~ getNextPage", getNextPage)
        setNext(response.data.info.next);

    }

    useEffect(() => {
        getNextPage()
    }, []);



    return (
        <div>
            <h1>Next</h1>
            <ul>
                {next?.map(page => (
                    <li>
                        <Link to={`https://rickandmortyapi.com/api/character/?page=${id + 2}`} />
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Next;
