import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Input from './components/Inputs.js'

const colores = {
    borde: '#0075ff',
    error: '#bb2929',
    exito: '#1ed12d',
}
const Form = styled.form`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:20px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }

`;
const Label = styled.label`
    display:block;
    font-weight:700;
    padding:10px;
    min-height:40px;

`;
const GrupoInput = styled.div`
position:relative;
z-index:90;
`;
const Input = styled.input`
    width:100%;
    background-color:#fff;
    border-radius:3px;
    height:45px;
    line-height:45px;
    padding:0 40px 0  10px;
    transition: .3s ease all;
    border:3px solid transparent;
    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }
`;

const LeyendaError = styled.p`
    color:${colores.error};
    font-size:12px;
    margin-bottom:0;
    display:none;
`;
const IconoValidacion = styled(FontAwesomeIcon)`
    position:absolute;
    right:10px;
    bottom:14px;
    z-index:100;
    font-size:16px;
    opacity:0; 
    `;
const ContenedorTerminos = styled.div`
    grid-column: span 2;
    input{
        margin-right:10px;
    }
`;

const ContenedorBotonCentrado = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    grid-column: span 2;
`;
const Boton = styled.button`
 height:45px;
 line-height: 45px;
 width: 30%;
 background:#000;
 color: #fff;
 font-weight:bold;
 border:none;
 border-radius:3px;
 cursor:pointer;
 transition: .1s ease all;

 &:hover{
     box-shadow: 3px 0px 30px rgba(163,163,163, 1);
 }

 `;
const MensajeExito = styled.p`
    font-size:14px;
    color:${colores.exito};
    display:none;
`;
const MensajeError = styled.div`
height:45px;
line-height: 45px;
    background:#F66060;
    padding:0 15px;
    border-radius:3px;
    grid-column: span 2;
    p{
        margin:0;
    }
`;
const Formulario = () => {
    return (
        <div>
            <Form action="#">
                <Input />



                <ContenedorTerminos>
                    <Label>
                        <input type="checkbox" name="terminos" id="terminos" />
                        Acepto los Terminos y Condiciones
                    </Label>
                </ContenedorTerminos>
                {false && <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle} />&nbsp;
                        <b> Error:</b> Por favor rellene el formulario correctamente.
                    </p>
                </MensajeError>}
                <ContenedorBotonCentrado>
                    <Boton type="submit">Enviar</Boton>
                    <MensajeExito>Formulario enviado esxitosamente!</MensajeExito>
                </ContenedorBotonCentrado>

            </Form>
        </div>
    )
}

export {
    ContenedorBoton,
    Formulario,
    Input,
    Label,
    GrupoInput,
    Input,
    LeyendaError,
    IconoValidacion,
    ContenedorTerminos,
    ContenedorBotonCentrado,
    Boton,
    MensajeExito,
    MensajeError
}

export default Formulario
