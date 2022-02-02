import styled, {css} from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores = {
	borde: "#0075FF",
	error: "#bb2929",
	exito: "#1ed12d"
}
const Formulario = styled.form`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
@media (max-width: 800px){
grid-template-columns: 1fr;
}
`;

const Boton = styled.button`
	height: 45px;
	line-height: 45px;
	width: 30%;
	background: #000;
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	margin: 5px;
	justify-content: center;
	align-items: center;
	transition: .1s ease all;
	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
`;
const Input = styled.input`
	width: 100%;
	background: #fff;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;
	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	${props => props.valido === 'true' && css`
		border: 3px solid transparent;
	`}
	${props => props.valido === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

export {
    Formulario,
    Boton,
	Input
}