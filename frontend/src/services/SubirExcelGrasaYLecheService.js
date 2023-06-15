import axios from "axios";

const GRASAYSOLIDO_API_URL = "http://localhost:8080/grasa_solidos_totales/subirGrasaSolidoTotal";

class SubirExcelGrasaYLecheService{
    CargarArchivoGrasaYSolido(file){
        return axios.post(GRASAYSOLIDO_API_URL, file);
    }
}

export default new SubirExcelGrasaYLecheService()
