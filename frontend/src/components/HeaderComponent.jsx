import React from 'react'
import '../styles/navbar.css'

function HeaderComponent() {
    return (
        <div>
            <header class="header">
                <div class="logo">
                    <h1>MilkStgo</h1>
                </div>
                <nav></nav>
                <a class="btn" href="/"><button>Volver al menú principal</button></a>
                <a class="btn" href="/agregar_proveedor"><button>Ingresar nuevo Proveedor</button></a>
            </header>
        </div>
    )
}

export default HeaderComponent
