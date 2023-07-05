import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AcopioLecheService from "../services/AcopioLecheService";
import HeaderComponentListaAcopio from "./Headers/HeaderComponentListaAcopio";
import swal from "sweetalert";

class SubirExcelAcopioLecheComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
        };
        this.onFileChange = this.onFileChange.bind(this);
    }

    onFileChange(event) {
        this.setState({ file: event.target.files[0] });
    }
    onFileUpload = () => {
        swal({
            title: "¿Está seguro de que desea cargar el archivo ccv?",
            text: "Tenga en cuenta que el archivo solo será cargado si su nombre es '.ccv' y si su formato es correcto.",
            icon: "warning",
            buttons: ["Cancelar", "Cargar"],
            dangerMode: true,
        }).then((respuesta) => {
            if (respuesta) {
                swal("Archivo cargado correctamente!", { icon: "success", timer: "3000" });
                const formData = new FormData();
                formData.append("file", this.state.file);
                AcopioLecheService.CargarArchivoAcopio(formData).then((res) => {});
            } else {
                swal({ text: "Archivo no cargado.", icon: "error" });
            }
        });
    };

    render() {
        return (
            <div>
                <HeaderComponentListaAcopio></HeaderComponentListaAcopio>
                <div class="f">
                    <div class="container-excel">
                        <h1>
                            <b>Cargar el archivo de datos de Acopio de Leche</b>
                        </h1>
                        <div class="container-padding">
                            <Row className="mt-4">
                                <Col col="12">
                                    <Form.Group class="" controlId="formFileLg">
                                        <Form.Control type="file" size="lg" onChange={this.onFileChange} />
                                    </Form.Group>
                                    <Button className="boton-excel" onClick={this.onFileUpload}>
                                        Cargar el archivo a la Base de Datos
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <br />
                <hr />

                <div class="form1">
                    <h5>
                        <b>Recuerde que debe cargar un archivo Excel de extensión .csv!</b>
                    </h5>
                </div>
            </div>
        );
    }
}
export default SubirExcelAcopioLecheComponent;