import axios from 'axios';

const GRASAYSOLIDOSTOTALES_API_URL = "http://localhost:8080/grasa_solidos_totales";

class GrasaYSolidosTotalesService {

    getGrasaYSolidosTotales(){
        return axios.get(GRASAYSOLIDOSTOTALES_API_URL);
    }

    createGrasaYSolidosTotales(acopioLeche){
        return axios.post(GRASAYSOLIDOSTOTALES_API_URL, acopioLeche);
    }

    CargarArchivoGrasaYSolido(file){
        return axios.post(GRASAYSOLIDOSTOTALES_API_URL + "/subirGrasaSolidoTotal", file);
    }
}

export default new GrasaYSolidosTotalesService()