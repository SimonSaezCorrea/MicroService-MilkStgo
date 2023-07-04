package tingeso.backendproveedorservice.controller;

import tingeso.backendproveedorservice.entity.ProveedorEntity;
import tingeso.backendproveedorservice.service.ProveedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/proveedor")
public class ProveedorController {

    @Autowired
    private ProveedorService proveedorService;

    @GetMapping()
    public ResponseEntity<List<ProveedorEntity>> listar() {
        List<ProveedorEntity> proveedores = proveedorService.obtenerProveedores();
        if(proveedores.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(proveedores);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProveedorEntity> proveedor(@PathVariable("id") String id){
        ProveedorEntity proveedor = proveedorService.encontrarPorCodigo(id);
        if(proveedor == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(proveedor);
    }

    @PostMapping()
    public ResponseEntity<ProveedorEntity> nuevoProveedor(@RequestBody ProveedorEntity proveedor){
        proveedorService.guardarProveedor(proveedor);
        return ResponseEntity.ok(proveedor);
    }
}
