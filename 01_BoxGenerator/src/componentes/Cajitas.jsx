import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core';
import { Input, Boton, Formulario } from './Formularios';

const estilos = makeStyles((theme) => ({
    fondo: {
        background: theme.palette.secondary,
    },
}));
const Cajitas = (props) => {

    const { colorBox, setColorBox, arrayColor, setArrayColor } = props;
    console.log(setArrayColor)

    const createBox = (e) => {
        e.preventDefault();
        const idColor = arrayColor.length + 1;
        let newColor = { id: idColor, color: colorBox.color };
        setArrayColor([...arrayColor, newColor]);
        setColorBox({ id: '', color: '' }) //limpia el formulario
    }

    return (
        <div>
            <Formulario onSubmit={createBox}>
                <Grid container spacing={0}>

                    <Grid item xs={12}>
                        <Input
                            type="text"
                            name="color"
                            id="color"
                            value={colorBox.color}
                            placeholder="Escriba el color. Ej: Red"
                            onChange={(e) => setColorBox({
                                [e.target.name]: e.target.value
                            }
                            )}>
                        </Input>
                        <Boton>Add</Boton>
                    </Grid>
                </Grid>
            </Formulario>
        </div>
    )
}



export default Cajitas
