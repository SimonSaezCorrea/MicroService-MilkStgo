import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PlanillaDePagoTodoUsuarioService from "../services/PlanillaDePagoTodoUsuarioService";
import HeaderComponentVentanaSiguiente from "./Headers/HeaderComponentVentanaSiguiente";
import swal from "sweetalert";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

export default function PlanillaDePagoTodoUsuarioComponent(props) {
    const initialState = {
        proveedor_id: "",
        listPlanillaDePagoTodoUsuario: [],
    };
    const navigate = useNavigate();
    const [input, setInput] = useState(initialState);
    useEffect(() => {
        PlanillaDePagoTodoUsuarioService.getPlanillaDePagoTodoUsuario().then((res) => {
            setInput({ ...input, listPlanillaDePagoTodoUsuario: res.data }); // Actualizar el estado correctamente
        });
    }, []);
    const calcular = (event) => {
        event.preventDefault();
        swal({
            title: "¿Está seguro de que desea calcular ese proveedor?",
            text: "Una vez enviado, no podrá ser modificado.",
            icon: "warning",
            buttons: ["Cancelar", "Enviar"],
            dangerMode: true,
        }).then((respuesta) => {
            if (respuesta) {
                console.log("proveedor: " + input.proveedor_id);
                PlanillaDePagoTodoUsuarioService.createPlanillaDePagoTodoUsuario(input.proveedor_id).then((res) => {});
            } else {
                swal({ text: "Cálculo no hecho.", icon: "error" });
            }
        });
    };
    const changeProveedorId = (event) => {
        setInput({ ...input, proveedor_id: event.target.value });
        console.log(input.proveedor_id);
    };
    const datoUsuario = (proveedor_id) => {
        navigate("/planilla_de_pago/" + proveedor_id);
        //window.location.href = '/planilla_de_pago/' + proveedor_id;
    };
    return (
        <div>
            <HeaderComponentVentanaSiguiente></HeaderComponentVentanaSiguiente>
            <div align="center" class="container-2">
                <h1>
                    <b>Planillas proveedores</b>
                </h1>
                <div>
                    <Form>
                        <Form.Group
                            className="input-plan"
                            controlID="proveedor_id"
                            value={input.proveedor_id}
                            onChange={changeProveedorId}
                        >
                            <Form.Control type="text" name="proveedor_id" placeholder="00000 / 000001 / ...." />
                        </Form.Group>
                    </Form>
                    <Button className="input-plan-boton" onClick={calcular}>
                        Calcular
                    </Button>
                </div>
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
                                    <button
                                        className="input-plan-boton"
                                        onClick={() => datoUsuario(planillaDePago.proveedor_id)}
                                    >
                                        Quincena
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
