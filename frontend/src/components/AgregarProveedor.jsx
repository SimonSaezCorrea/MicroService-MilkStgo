import React, { useState } from "react";
import HeaderComponentVentanaSiguiente from "./Headers/HeaderComponentVentanaSiguiente";
import ProveedorService from "../services/ProveedorService";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';

export default function AgregarProveedor(props){

    const initialState = {
        proveedor_id: "",
        nombre: "",
        categoria: "",
        afecto_retencion: ""
    };

    const [input, setInput] = useState(initialState);
    
    const changeProveedorIDHandler = event => {
        setInput({ ...input, proveedor_id: event.target.value });
    };
    const changeNombreHandler = event => {
        setInput({ ...input, nombre: event.target.value });
    };
    const changeCategoriaHandler = event => {
        setInput({ ...input, categoria: event.target.value });
    };
    const changeRetencionHandler = event => {
        setInput({ ...input, afecto_retencion: event.target.value });
    };

    
    const ingresarProveedor = e => {
        e.preventDefault();
        swal({
            title: "¿Está seguro de que desea enviar este proveedor?",
            text: "Una vez enviado, no podrá ser modificado.",
            icon: "warning",
            buttons: ["Cancelar", "Enviar"],
            dangerMode: true
        }).then(respuesta=>{
            if(respuesta){
                swal("Proveedor registrado correctamente!", {icon: "success", timer: "3000"});
                let proveedor = { proveedor_id: input.proveedor_id, 
                    nombre: input.rut,
                    categoria: input.categoria,
                    afecto_retencion: input.afecto_retencion};
                console.log(input.proveedor_id)
                console.log(input.nombre)
                console.log(input.categoria)
                console.log(input.afecto_retencion)
                console.log("proveedor => " + JSON.stringify(proveedor));
                ProveedorService.createProveedores(proveedor).then(
                    (res) => {
                    }
                  );
                }
            else{
                swal({text: "Proveedor no registrado.", icon: "error"});
            }
        });
    };

    return(
            <div class="general">
                <HeaderComponentVentanaSiguiente />
                <div class="container-create">
                    <Form>
                        <Form.Group className="mb-3" controlId="proveedor_id" value = {input.proveedor_id} onChange={changeProveedorIDHandler}>
                            <Form.Label for="proveedor_id">Código:</Form.Label>
                            <Form.Control type="text" name="proveedor_id" placeholder="00000 / 000001 / ...."/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="nombre" value = {input.nombre} onChange={changeNombreHandler}>
                            <Form.Label for="nombre">Nombre Proveedor:</Form.Label>
                            <Form.Control type="text" name="nombre" placeholder="Mario Martinez"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="categoria" value = {input.categoria} onChange={changeCategoriaHandler}>
                            <Form.Label for="categoria">Categoría:</Form.Label>
                            <Form.Control type="text" name="categoria" placeholder="A / B / C / D"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="afecto_retencion" value = {input.afecto_retencion} onChange={changeRetencionHandler}>
                            <Form.Label for="afecto_retencion">Afecto a Retención:</Form.Label>
                            <Form.Control type="text" name="afecto_retencion" placeholder="Sí / No"/>
                        </Form.Group>
                    </Form>
                    <Button className="boton" onClick={ingresarProveedor}>Registrar Justificativo</Button>
                </div>
            </div>
        )
    }