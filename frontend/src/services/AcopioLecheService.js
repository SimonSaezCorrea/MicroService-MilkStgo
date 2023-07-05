import axios from 'axios';

const ACOPIOLECHE_API_URL = "http://localhost:8080/acopio_leche";

class AcopioLecheService {

    getAcopioLeche(){
        return axios.get(ACOPIOLECHE_API_URL);
    }

    createAcopioLeche(acopioLeche){
        return axios.post(ACOPIOLECHE_API_URL, acopioLeche);
    }
    CargarArchivoAcopio(file){
        return axios.post(ACOPIOLECHE_API_URL + "/subirAcopioLeche", file);
    }
}

export default new AcopioLecheService()