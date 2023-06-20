import axios from 'axios';

const PLANILLADEPAGO_API_URL = "http://localhost:8080/pago_planilla";

class PlanillaDePagoTodoUsuarioService {

    getPlanillaDePagoTodoUsuario(){
        return axios.get(PLANILLADEPAGO_API_URL);
    }
    createPlanillaDePagoTodoUsuario(proveedor_id){
        console.log("proveedor_id: " + proveedor_id);
        return axios.post(PLANILLADEPAGO_API_URL, proveedor_id);
    }
}

export default new PlanillaDePagoTodoUsuarioService();