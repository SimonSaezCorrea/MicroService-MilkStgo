import axios from 'axios';

const PROVEEDOR_API_URL = "http://localhost:8080/proveedor";

class ProveedorService {

    getProveedores(){
        return axios.get(PROVEEDOR_API_URL);
    }

    createProveedores(proveedor){
        return axios.post(PROVEEDOR_API_URL, proveedor);
    }

    getProveedorById(proveedorId){
        return axios.get(PROVEEDOR_API_URL + '/' + proveedorId);
    }
}

export default new ProveedorService()