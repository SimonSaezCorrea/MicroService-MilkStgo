import React, { Component } from 'react'
import '../styles/listas.css'
import ProveedorService from '../services/ProveedorService'
import HeaderComponent from './HeaderComponent'

class ListadoProveedoresComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            listProveedores: [],
        };
    }

    componentDidMount(){
        ProveedorService.getProveedores().then((res) => {
        this.setState({ listProveedores: res.data});
            });
    }

    render(){
        return(
            <div>
                <HeaderComponent></HeaderComponent>
                <div align="center" class="container my-2">
                    <h1><b> Listado de proveedores</b></h1>
                    <table border="1" class="content-table">
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nombre</th>
                                <th>Categoria</th>
                                <th>Afecto Retencion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listProveedores.map(
                                    proveedor => (
                                    <tr key= {proveedor.proveedor_id}>
                                        <td> {proveedor.proveedor_id} </td>
                                        <td> {proveedor.nombre} </td>
                                        <td> {proveedor.categoria} </td>
                                        <td> {proveedor.afecto_retencion} </td>
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

export default ListadoProveedoresComponent