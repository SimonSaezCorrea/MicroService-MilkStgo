import React, { Component } from 'react'
import '../styles/listas.css'
import AcopioLecheService from '../services/AcopioLecheService'
import HeaderComponent from './HeaderComponent'

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
            <div>
                <HeaderComponent></HeaderComponent>
                <div align="center" class="container my-2">
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