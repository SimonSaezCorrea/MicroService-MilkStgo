import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeaderComponentListaProveedores() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    return (
        <div>
            <header class="header">
                <div class="logo">
                    <h1 onClick={handleClick}>MilkStgo</h1>
                </div>
                <nav></nav>
                <a class="btn" href="/agregar_proveedor"><button>Ingresar Nuevo Proveedor</button></a>
                <a class="btn" href="/"><button>Regresar</button></a>
            </header>
        </div>
    )
}

export default HeaderComponentListaProveedores
