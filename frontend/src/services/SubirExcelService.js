import axios from "axios";

const API_URL = "http://localhost:8080/acopio_leche/subirAcopioLeche";

class SubirExcelService{
    
    CargarArchivo(file){
        return axios.post(API_URL, file);
    }
}

export default new SubirExcelService()
