import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import "../styles/listas.css";
import PlanillaDePagoTodoUsuarioService from "../services/PlanillaDePagoTodoUsuarioService";
import HeaderComponentVentanaSiguiente from "./Headers/HeaderComponentVentanaSiguiente";
import styled from "styled-components";
import swal from 'sweetalert';

export default function PlanillaDePagoTodoUsuarioComponent(props) {
    const initialState = {
        proveedor_id: '',
        listPlanillaDePagoTodoUsuario: [],
    };
    const navigate = useNavigate();
    const [input, setInput] = useState(initialState);
    useEffect(() => {
        PlanillaDePagoTodoUsuarioService.getPlanillaDePagoTodoUsuario()
          .then((res) => {
            setInput({ ...input, listPlanillaDePagoTodoUsuario: res.data }); // Actualizar el estado correctamente
          });
    }, []);

    const calcular = event => {
        event.preventDefault();
        PlanillaDePagoTodoUsuarioService.createPlanillaDePagoTodoUsuario(input.proveedor_id)
        .then((res) => {
            }
          );
        swal("Cálculo hecho correctamente!", {icon: "success", timer: "3000"});
    }
    const changeProveedorId = event => {
        setInput({ ...input, proveedor_id: event.target.value})
        console.log(input.proveedor_id);
    }
    const datoUsuario = (proveedor_id) => {
        navigate('/planilla_de_pago/' + proveedor_id);
        //window.location.href = '/planilla_de_pago/' + proveedor_id;
    }
        return (
            <div>
                <HeaderComponentVentanaSiguiente></HeaderComponentVentanaSiguiente>
                    <div align="center" class="container my-2">
                        <h1>
                            <b>Planillas proveedores</b>
                        </h1>
                        <form action={calcular} method="POST">
                            <input type="text" id="proveedor_id" name="proveedor_id" placeholder="Código proveedor"
                                value={input.proveedor_id} onChange={changeProveedorId}/>
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
                                {input.listPlanillaDePagoTodoUsuario.map((planillaDePago) => (
                                    <tr key={planillaDePago.proveedor_id}>
                                        <td> {planillaDePago.proveedor_id}</td>
                                        <td> {planillaDePago.nombreProveedor} </td>
                                        <td> {planillaDePago.fecha} </td>
                                        <td>
                                            <button className="btn btn-info" onClick={()=>datoUsuario(planillaDePago.proveedor_id)}>Quincena</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            </div>
        );
    }