import axios from 'axios';

const PLANILLADEPAGO_API_URL = "http://localhost:8080/pago_planilla/proveedor/";

class PlanillaDePagoService {

    getPlanillaDePago(proveedor_id){
        return axios.get(PLANILLADEPAGO_API_URL + proveedor_id);
    }
}

export default new PlanillaDePagoService()