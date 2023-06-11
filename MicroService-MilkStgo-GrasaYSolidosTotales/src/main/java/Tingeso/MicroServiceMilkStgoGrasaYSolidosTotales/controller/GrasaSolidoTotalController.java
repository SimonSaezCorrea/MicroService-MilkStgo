package Tingeso.MicroServiceMilkStgoGrasaYSolidosTotales.controller;

import Tingeso.MicroServiceMilkStgoGrasaYSolidosTotales.entity.GrasaSolidoTotalEntity;
import Tingeso.MicroServiceMilkStgoGrasaYSolidosTotales.service.ArchivosService;
import Tingeso.MicroServiceMilkStgoGrasaYSolidosTotales.service.GrasaSolidoTotalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/grasa_solidos_totales")
public class GrasaSolidoTotalController {

    @Autowired
    private GrasaSolidoTotalesService grasaSolidoTotalesService;
    @Autowired
    private ArchivosService archivosService;

    @PostMapping("/subir_grasaSolidoTotal")
    public ResponseEntity<MultipartFile> upload(@RequestParam("file") MultipartFile file) {
        System.out.println("File: " + file.getOriginalFilename());
        if(!Objects.equals(file.getOriginalFilename(), "")){
            archivosService.guardarArchivo(file);
            grasaSolidoTotalesService.leerArchivoGrasaSolido(file.getOriginalFilename());
        }
        return ResponseEntity.ok(file);
    }

    @GetMapping()
    public ResponseEntity<List<GrasaSolidoTotalEntity>> listar() {
        List<GrasaSolidoTotalEntity> grasaSolidoTotalEntities = grasaSolidoTotalesService.obtenerGrasaSolidoTotal();
        return ResponseEntity.ok(grasaSolidoTotalEntities);
    }

    @GetMapping("/proveedor/{proveedor_id}")
    public ResponseEntity<GrasaSolidoTotalEntity> AcopioLeche(@PathVariable("proveedor_id") String proveedor_id){
        GrasaSolidoTotalEntity grasaSolidoTotalEntities = grasaSolidoTotalesService.obtenerGrasaSolidoTotal(proveedor_id);
        if(grasaSolidoTotalEntities == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(grasaSolidoTotalEntities);
    }
}
