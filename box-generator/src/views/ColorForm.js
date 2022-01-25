import React, { useState } from 'react';

const ColorForm = () => {
    const [newColor, setNewColor] = useState('')
    const [boxes, setBoxes] = useState([])
    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(setBoxes)
        setBoxes([...boxes, newColor])
    }
    const handleOnChange = (e) => {
        console.log(e.target.value)
        setNewColor(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit} >
            <h1>Seleccione un color</h1>
                <label>Color</label>
                <input type='color' name='color' onChange={handleOnChange} />
                <button type='submit'>Add</button>
            </form>
            <div className='box-container'>
                {boxes.map((color, index) => <div className='box' key={index} style={{ backgroundColor: color }}>{color}</div>)}
            </div>
        </div>
    );
};
export default ColorForm;
