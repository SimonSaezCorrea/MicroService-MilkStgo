import React, { Component } from 'react'
import '../styles/listas.css'
import GrasaYSolidosTotalesService from '../services/GrasaYSolidosTotalesService'
import HeaderComponentVentanaSiguiente from './Headers/HeaderComponentVentanaSiguiente'

class ListadoGrasaYSolidosTotalesComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            listGrasaYSolidoTotal: [],
        };
    }
    
    componentDidMount(){
        GrasaYSolidosTotalesService.getGrasaYSolidosTotales().then((res) => {
        this.setState({ listGrasaYSolidoTotal: res.data});
            });
    }

    render(){
        return(
            <div>
                <HeaderComponentVentanaSiguiente></HeaderComponentVentanaSiguiente>
                <div align="center" class="container my-2">
                    <h1><b> Listado de Grasa Y Solidos Totales</b></h1>
                    <table border="1" class="content-table">
                        <thead>
                            <tr>
                                <th>Proveedor</th>
                                <th>Grasa</th>
                                <th>Solido Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listGrasaYSolidoTotal.map(
                                    grasaYSolidoTotal => (
                                    <tr key= {grasaYSolidoTotal.solido_grasasTotal_id}>
                                        <td> {grasaYSolidoTotal.proveedor_id} </td>
                                        <td> {grasaYSolidoTotal.grasa} </td>
                                        <td> {grasaYSolidoTotal.solidoTotal} </td>
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

export default ListadoGrasaYSolidosTotalesComponent