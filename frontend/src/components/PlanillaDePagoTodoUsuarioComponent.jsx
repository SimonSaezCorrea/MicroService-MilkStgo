import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import PlanillaDePagoTodoUsuarioService from "../services/PlanillaDePagoTodoUsuarioService";
import HeaderComponentVentanaSiguiente from "./Headers/HeaderComponentVentanaSiguiente";
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
        swal("Cálculo hecho correctamente!", {icon: "success", timer: "3000"});
        PlanillaDePagoTodoUsuarioService.createPlanillaDePagoTodoUsuario(input.proveedor_id)
        .then((res) => {
            }
          );
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
                    <div align="center" class="container-2">
                        <h1>
                            <b>Planillas proveedores</b>
                        </h1>
                        <form action={calcular} method="POST">
                            <input class="input-plan" type="text" id="proveedor_id" name="proveedor_id" placeholder="Código proveedor"
                                value={input.proveedor_id} onChange={changeProveedorId}/>
                            <input class="input-plan-boton" id="submit" type="submit" value="Calcular" />
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
                                            <button className="input-plan-boton" onClick={()=>datoUsuario(planillaDePago.proveedor_id)}>Quincena</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            </div>
        );
    }