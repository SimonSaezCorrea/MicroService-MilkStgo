import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeaderComponent() {
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
                <a class="btn" href="/agregar_proveedor"><button>Ingresar nuevo Proveedor</button></a>
            </header>
        </div>
    )
}

export default HeaderComponent
