import React from 'react'
import '../../styles/navbar.css'
import { useNavigate } from 'react-router-dom';

function HeaderComponentPlanillaUsuario() {
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
                <a class="btn" href="/planilla_de_pago"><button>Regresar</button></a>
            </header>
        </div>
    )
}

export default HeaderComponentPlanillaUsuario
