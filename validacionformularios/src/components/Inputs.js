import React from 'react'
import { GrupoInput, Input, Label, IconoValidacion, LeyendaError } from './styles'

const Inputs = () => {
    return (
        <div>
            <Label htmlFor="nombre">Nombre:</Label>
            <GrupoInput>
                <Input type="text" id="nombre" placeholder="nombre" />
                <IconoValidacion icon={faCheckCircle} />
            </GrupoInput>
            <LeyendaError>Ingrese un nombre de usuario</LeyendaError>
        </div>
    )
}

export default Inputs
