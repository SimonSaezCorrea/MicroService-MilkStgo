import React, { Component } from "react";
import "../styles/listas.css";
import PlanillaDePagoTodoUsuarioService from "../services/PlanillaDePagoTodoUsuarioService";
import HeaderComponent from "./HeaderComponent";
import styled from "styled-components";

class PlanillaDePagoTodoUsuarioComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listPlanillaDePagoTodoUsuario: [],
        };
    }

    componentDidMount() {
        PlanillaDePagoTodoUsuarioService.getPlanillaDePagoTodoUsuario().then((res) => {
            this.setState({ listPlanillaDePagoTodoUsuario: res.data });
        });
    }
    datoUsuario(proveedor_id, fecha){
        this.props.history.push('/vieplanilla_de_pago/' + proveedor_id + "/" + fecha);
    }
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <Styles>
                    <div align="center" class="container my-2">
                        <h1>
                            <b>Planillas proveedores</b>
                        </h1>
                        <form action="/planillas_de_pagos" method="POST">
                            <input type="text" id="proveedor_id" name="proveedor_id" placeholder="Código proveedor" />
                            <input id="submit" type="submit" value="Calcular" />
                        </form>
                        <table border="1" class="content-table">
                            <thead>
                                <tr>
                                    <th>Código Proveedor</th>
                                    <th>Nombre Proveedor</th>
                                    <th>Última fecha</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listPlanillaDePagoTodoUsuario.map((planillaDePago) => (
                                    <tr key={planillaDePago.proveedor_id}>
                                        <td> {planillaDePago.proveedor_id}</td>
                                        <td> {planillaDePago.nombreProveedor} </td>
                                        <td> {planillaDePago.fecha} </td>
                                        <td>
                                            <a class="btn btn-success" onClick={ () => this.datoUsuario(planillaDePago.proveedor_id, planillaDePago.fecha)}>Quincena</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Styles>
            </div>
        );
    }
}

export default PlanillaDePagoTodoUsuarioComponent;

const Styles = styled.div`
    ::placeholder {
        color: #aeaeae;
        font-weight: bold;
        text-align: center;
    }
    #submit {
        margin-left: 5px;
        width: 100px;
        height: 30px;
        background-color: #009879;
        color: #eceff1;
        font-weight: bold;
        border-width: 2px;
        border-style: solid;
        border-color: #005c49;
        border-radius: 50px;
    }
    #submit:hover {
        background-color: #00b279;
        color: #ffffff;
        transform: scale(1.1);
    }

    tbody td a {
        background-color: #009879 !important;
        border-width: 2px !important;
        border-style: solid !important;
        border-color: #005c49 !important;
        border-radius: 50px !important;
    }
    tbody td a:hover {
        background-color: #00b279 !important;
        color: #ffffff !important;
        transform: scale(1.1) !important;
    }
`;
