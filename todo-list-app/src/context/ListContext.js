import React, { createContext, useState} from 'react';
//Se crea la intsncia de contextion
export const ListContext = createContext();

//Se crea al proveedor

export const ListProvider = ({children}) => {
    const [list, setList] = useState([]);
    return (
        <ListContext.Provider value={{list, setList}}>
            {children}
        </ListContext.Provider>
    );
}





