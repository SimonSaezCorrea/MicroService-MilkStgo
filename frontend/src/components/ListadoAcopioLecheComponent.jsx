import React, { Component } from 'react'
import AcopioLecheService from '../services/AcopioLecheService'
import HeaderComponentVentanaSiguiente from './Headers/HeaderComponentVentanaSiguiente'

class ListadoAcopioLecheComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            listAcopioLeche: [],
        };
    }

    componentDidMount(){
        AcopioLecheService.getAcopioLeche().then((res) => {
        this.setState({ listAcopioLeche: res.data});
            });
    }

    render(){
        return(
            <div class="general">
                <HeaderComponentVentanaSiguiente></HeaderComponentVentanaSiguiente>
                <div align="center" class="container-2">
                    <h1><b> Listado de Acopio de Leche</b></h1>
                    <table border="1" class="content-table">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Turno</th>
                                <th>Proveedor</th>
                                <th>Kls Leche</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listAcopioLeche.map(
                                    acopioLeche => (
                                    <tr key= {acopioLeche.acopio_leche_id}>
                                        <td> {acopioLeche.fecha} </td>
                                        <td> {acopioLeche.turno} </td>
                                        <td> {acopioLeche.proveedor_id} </td>
                                        <td> {acopioLeche.kls_leche} </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListadoAcopioLecheComponent