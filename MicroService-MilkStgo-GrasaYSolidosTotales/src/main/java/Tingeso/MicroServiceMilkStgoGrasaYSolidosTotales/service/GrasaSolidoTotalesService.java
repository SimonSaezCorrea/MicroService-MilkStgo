package Tingeso.MicroServiceMilkStgoGrasaYSolidosTotales.service;

import Tingeso.MicroServiceMilkStgoGrasaYSolidosTotales.entity.GrasaSolidoTotalEntity;
import Tingeso.MicroServiceMilkStgoGrasaYSolidosTotales.repository.GrasaSolidoTotalRepository;
import lombok.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GrasaSolidoTotalesService {
    @Autowired
    GrasaSolidoTotalRepository grasaSolidoTotalRepository;
    @Autowired
    ArchivosService archivosService;
    public GrasaSolidoTotalEntity guardarGrasaSolidoTotal(GrasaSolidoTotalEntity grasaSolidoTotalesEntity) {
        GrasaSolidoTotalEntity grasaSolidoTotalEntityNew = grasaSolidoTotalRepository.save(grasaSolidoTotalesEntity);
        return grasaSolidoTotalEntityNew;
    }

    public List<GrasaSolidoTotalEntity> obtenerGrasaSolidoTotal() {
        return grasaSolidoTotalRepository.findAll();
    }

    public GrasaSolidoTotalEntity obtenerGrasaSolidoTotal(String proveedorId){
        return grasaSolidoTotalRepository.encontrarPorProveedor(proveedorId);
    }

    @Generated
    public void leerArchivoGrasaSolido(String direccion){
        for(String[] listaDatos:archivosService.leerCSV(direccion)){
            GrasaSolidoTotalEntity grasaSolidoTotalesEntity = new GrasaSolidoTotalEntity(listaDatos[0],listaDatos[1],listaDatos[2]);
            guardarGrasaSolidoTotal(grasaSolidoTotalesEntity);
        }
    }

}
