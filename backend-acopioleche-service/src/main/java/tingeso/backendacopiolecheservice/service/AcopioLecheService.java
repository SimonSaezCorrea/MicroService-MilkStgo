package tingeso.backendacopiolecheservice.service;

import Tingeso.MicroServiceMilkStgoAcopioLeche.entity.AcopioLecheEntity;
import Tingeso.MicroServiceMilkStgoAcopioLeche.repository.AcopioLecheRepository;
import lombok.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AcopioLecheService {
    @Autowired
    private AcopioLecheRepository acopioLecheRepository;
    @Autowired
    ArchivosService archivosService;


    public AcopioLecheEntity guardarAcopioLeche(AcopioLecheEntity acopioLeche){
        AcopioLecheEntity acopioLecheNew = acopioLecheRepository.save(acopioLeche);
        return acopioLecheNew;
    }
    public List<AcopioLecheEntity> obtenerAcopioLeche(){
        return acopioLecheRepository.findAll();
    }
    public List<AcopioLecheEntity> obtenerAcopioLeche(String proveedorId){
        return acopioLecheRepository.encontrarPorProveedor(proveedorId);
    }
    public AcopioLecheEntity getById(int id){
        return acopioLecheRepository.encontrarPorID(id);
    }

    @Generated
    public void leerArchivoAcopio(String direccion){
        acopioLecheRepository.deleteAll();
        for(String[] listaDatos:archivosService.leerCSV(direccion)){
            AcopioLecheEntity acopioLeche = new AcopioLecheEntity(listaDatos[0], listaDatos[1], listaDatos[2], listaDatos[3]);
            guardarAcopioLeche(acopioLeche);
        }
    }
}