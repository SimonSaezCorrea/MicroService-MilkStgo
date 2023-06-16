import axios from 'axios';

const PLANILLADEPAGO_API_URL = "http://localhost:8080/pago_planilla";

class PlanillaDePagoTodoUsuarioService {

    getPlanillaDePagoTodoUsuario(){
        return axios.get(PLANILLADEPAGO_API_URL);
    }
}

export default new PlanillaDePagoTodoUsuarioService()