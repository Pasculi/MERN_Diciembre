import React from 'react'
import './style.css'


const BoxList = (props) => {
    const { colorBox } = props;
    console.log(colorBox)
    const {id, color} = colorBox;
    const divStyle ={
        backgroundColor: color,
    }
    console.log(divStyle);
    
    return (
        
            <div style={ divStyle } className="cuadro" id={ id } >

            </div>
        
    )
}

export default BoxList