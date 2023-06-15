import axios from "axios";

const ACOPIO_API_URL = "http://localhost:8080/acopio_leche/subirAcopioLeche";

class SubirExcelLecheService{
    
    CargarArchivoAcopio(file){
        return axios.post(ACOPIO_API_URL, file);
    }
}

export default new SubirExcelLecheService()
