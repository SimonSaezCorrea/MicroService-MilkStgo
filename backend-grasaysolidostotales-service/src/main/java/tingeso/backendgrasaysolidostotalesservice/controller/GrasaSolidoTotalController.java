package tingeso.backendgrasaysolidostotalesservice.controller;

import tingeso.backendgrasaysolidostotalesservice.entity.GrasaSolidoTotalEntity;
import tingeso.backendgrasaysolidostotalesservice.service.ArchivosService;
import tingeso.backendgrasaysolidostotalesservice.service.GrasaSolidoTotalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.FileNotFoundException;
import java.text.ParseException;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/grasa_solidos_totales")
public class GrasaSolidoTotalController {

    @Autowired
    private GrasaSolidoTotalesService grasaSolidoTotalesService;
    @Autowired
    private ArchivosService archivosService;

    @PostMapping("/subirGrasaSolidoTotal")
    public void upload(@RequestParam("file") MultipartFile file, RedirectAttributes ms) throws FileNotFoundException, ParseException {
        if(!Objects.equals(file.getOriginalFilename(), "")){
            archivosService.guardarArchivo(file);
            grasaSolidoTotalesService.leerArchivoGrasaSolido(file.getOriginalFilename());
        }
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
