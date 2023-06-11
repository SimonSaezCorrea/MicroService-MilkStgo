package Tingeso.MicroServiceMilkStgoAcopioLeche.controller;

import Tingeso.MicroServiceMilkStgoAcopioLeche.entity.AcopioLecheEntity;
import Tingeso.MicroServiceMilkStgoAcopioLeche.service.AcopioLecheService;
import Tingeso.MicroServiceMilkStgoAcopioLeche.service.ArchivosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/acopio_leche")
public class AcopioLecheController {

    @Autowired
    private AcopioLecheService acopioLecheService;
    @Autowired
    private ArchivosService archivosService;

    @PostMapping("/subir_acopioLeche")
    public ResponseEntity<MultipartFile> upload(@RequestParam("file") MultipartFile file) {
        if(!Objects.equals(file.getOriginalFilename(), "")){
            archivosService.guardarArchivo(file);
            acopioLecheService.leerArchivoAcopio(file.getOriginalFilename());
        }
        return ResponseEntity.ok(file);
    }

    @GetMapping()
    public ResponseEntity<List<AcopioLecheEntity>> listar() {
        List<AcopioLecheEntity> acopio_leche = acopioLecheService.obtenerAcopioLeche();
        return ResponseEntity.ok(acopio_leche);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AcopioLecheEntity> AcopioLeche(@PathVariable("id") int id){
        AcopioLecheEntity acopioLeche = acopioLecheService.getById(id);
        if(acopioLeche == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(acopioLeche);
    }

    @GetMapping("/proveedores/{proveedor_id}")
    public ResponseEntity<List<AcopioLecheEntity>> AcopioLeche(@PathVariable("proveedor_id") String proveedor_id){
        List<AcopioLecheEntity> acopioLecheEntities = acopioLecheService.obtenerAcopioLeche(proveedor_id);
        if(acopioLecheEntities == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(acopioLecheEntities);
    }

    @PostMapping()
    public ResponseEntity<AcopioLecheEntity> nuevoAcopioLeche(@RequestBody AcopioLecheEntity acopioLeche){
        AcopioLecheEntity acopioLecheNew = acopioLecheService.guardarAcopioLeche(acopioLeche);
        return ResponseEntity.ok(acopioLecheNew);
    }
}
