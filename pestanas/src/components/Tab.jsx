import React from 'react';
import '../App.css';

const Tab = (props) => {
    const {selectedIdx, label, tabs, setTabs} = props;

    const handleClick = () => {
        // Hacemos una copia del array
        const copiedTabs = [...tabs];
        // para todos los objetos establecemos el isSelected a false 
        copiedTabs.map(eachTab => eachTab.isSelected = false);

        // Al hacer click en el tab seleccionado, se establece el isSelected a true
        const copiedTab = {...tabs[selectedIdx]}
        copiedTab.isSelected = true;

        // Reemplazamos el tab seleccionado por el nuevo tab con el isSelected a true
        copiedTabs[selectedIdx] = copiedTab;

        // reemplazamos el array de tabs por el nuevo array
        setTabs(copiedTabs);
    }

    return(
        <div className="tab">
            <button className="button" onClick={handleClick}>{ label }</button>
        </div>
    );
}

export default Tab;