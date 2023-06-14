import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/main.css'
import Excel from "../images/excel.png"
import CajaDeLeche from "../images/caja-de-leche.png"
import GrupoDeUsuarios from "../images/grupo-de-usuarios.png"
import PorcentajeGrasa from "../images/porcentaje-grasa.png"
import ReportePago from "../images/reporte-pago.png"
import HeaderComponent from './HeaderComponent';

function MainComponents() {
    const navigate = useNavigate();
    const handleClickProveedores = () => {
        navigate("/lista_proveedores");
    }
    const handleClickAcopioLeche = () => {
        navigate("/lista_acopio_leche");
    }
    return(
        <div>
            <HeaderComponent></HeaderComponent>
            <div class="container">
                <div class="card" onClick={""}>
                    <img id="excel_acopioLeche" src={Excel} alt="Imagen_1" />
                    <h2>Agregar Acopio de leche mediante excel</h2>
                </div>
                <div class="card" onClick={""}>
                    <img id="reporte_de_pagos" src={ReportePago} alt="Imagen_2" />
                    <h2>Planilla de pagos</h2>
                </div>
                <div class="card" onClick={""}>
                    <img id="excel_grasas_solidosTotales" src={Excel} alt="Imagen_3" />
                    <h2>Agregar grasas y solidos totales mediante excel</h2>
                </div>
            </div>

            <div class="container">
                <div class="card" onClick={handleClickAcopioLeche}>
                    <img id="lista_acopioLeche" src={CajaDeLeche} alt="Imagen_4" />
                    <h2>Listado de Acopio de leche</h2>
                </div>
                <div class="card" onClick={handleClickProveedores}>
                    <img id="lista_proveedores" src={GrupoDeUsuarios} alt="Imagen_5" />
                    <h2>Listado de proveedores</h2>
                </div>

                <div class="card" onClick={""}>
                    <img id="pagos_datos" src={PorcentajeGrasa} alt="Imagen_6" />
                    <h2>Listado de Grasa y Solidos Totales</h2>
                </div>
            </div>
        </div>
    )
}

export default MainComponents