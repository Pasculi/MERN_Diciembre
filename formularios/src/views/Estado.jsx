import { useState } from 'react';

const Estado = () => {
    const [estado, setEstado] = useState(0);
    const cambio = setInterval(() => {
    setEstado(estado + 1)
  }, 1000)
  
    return (
        <div>
            <h3>{cambio}</h3>
        </div>
    )
}

export default Estado
