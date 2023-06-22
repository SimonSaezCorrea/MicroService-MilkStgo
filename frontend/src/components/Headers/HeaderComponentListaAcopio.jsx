import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeaderComponentListaAcopio() {
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
                <a class="btn" href="/lista_acopio_leche"><button>Lista Acopio de Leche</button></a>
                <a class="btn" href="/"><button>Regresar</button></a>
            </header>
        </div>
    )
}

export default HeaderComponentListaAcopio
