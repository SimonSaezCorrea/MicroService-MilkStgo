package Tingeso.MicroServiceMilkStgoPlanillaPagoLeche.controller;

import Tingeso.MicroServiceMilkStgoPlanillaPagoLeche.entity.QuincenasEntity;
import Tingeso.MicroServiceMilkStgoPlanillaPagoLeche.repository.QuincenasRepository;
import Tingeso.MicroServiceMilkStgoPlanillaPagoLeche.service.QuincenasService;
import Tingeso.MicroServiceMilkStgoPlanillaPagoLeche.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@Controller
@RequestMapping("/pago_planilla")
@CrossOrigin(origins = "http://localhost:3000")
public class QuincenasController {

    @Autowired
    private QuincenasService quincenasService;

    @GetMapping()
    public ResponseEntity<List<QuincenasEntity>> listar() {
        List<ProveedorEntity> proveedorEntityList = quincenasService.getProveedores();
        List<QuincenasEntity> quincenasEntityList = new ArrayList<>();
        for(ProveedorEntity proveedorEntity:proveedorEntityList){
            quincenasEntityList.add(quincenasService.encontrarPorProveedor(proveedorEntity.getProveedor_id()));
        }
        int contador = 0;
        for(QuincenasEntity quincenasEntity:quincenasEntityList){
            if(quincenasEntity==null){
                quincenasEntityList.set(contador, new QuincenasEntity());
                quincenasEntityList.get(contador).setFecha("-");
                quincenasEntityList.get(contador).setProveedor_id(proveedorEntityList.get(contador).getProveedor_id());
                quincenasEntityList.get(contador).setNombreProveedor(proveedorEntityList.get(contador).getNombre());
            }
            contador++;
        }
        return ResponseEntity.ok(quincenasEntityList);
    }

    @PostMapping()
    public ResponseEntity<QuincenasEntity> nuevaQuincena(@RequestBody String proveedor_id){
        List<ProveedorEntity> proveedores = quincenasService.getProveedores();
        ProveedorEntity proveedor = null;
        for(ProveedorEntity p:proveedores){
            if(p.getProveedor_id().equals(proveedor_id)){
                proveedor = p;
                break;
            }
        }
        if(proveedor!=null){
            List<AcopioLecheEntity> acopioLecheEntityList = quincenasService.getAcopioLeche(proveedor_id);
            if(acopioLecheEntityList.isEmpty()){
                ResponseEntity.ok(null);
            }else {
                GrasaSolidoTotalEntity grasaSolidoTotalEntity = quincenasService.getGrasaSolidoTotal(proveedor_id).get(0);
                QuincenasEntity quincenasEntity = new QuincenasEntity();
                Calendar fecha = Calendar.getInstance();
                String fechaUnida = fecha.get(Calendar.YEAR) + "/" + fecha.get(Calendar.MONTH) + "/" + fecha.get(Calendar.DATE);
                quincenasEntity.setFecha(fechaUnida);
                quincenasEntity.setProveedor_id(proveedor_id);
                quincenasEntity.setNombreProveedor(proveedor.getNombre());
                int sum = 0;
                for (AcopioLecheEntity acopioLecheEntity : acopioLecheEntityList) {
                    sum += Integer.parseInt(acopioLecheEntity.getKls_leche());
                }
                quincenasEntity.setKlsLeche(sum);
                quincenasEntity.setNumeroDiasLeche(acopioLecheEntityList.size());
                quincenasEntity.setPromedioKlsLeche(sum / acopioLecheEntityList.size());
                quincenasEntity.setVariacionLeche(quincenasService.descuentoVariacionLeche(acopioLecheEntityList));
                quincenasEntity.setGrasa(Integer.parseInt(grasaSolidoTotalEntity.getGrasa()));
                quincenasEntity.setVariacionGrasa(quincenasService.descuentoVariacionGrasa(grasaSolidoTotalEntity));
                quincenasEntity.setSolido(Integer.parseInt(grasaSolidoTotalEntity.getSolidoTotal()));
                quincenasEntity.setVariacionSolido(quincenasService.descuentoVariacionSolidoTotal(grasaSolidoTotalEntity));
                quincenasEntity.setPagoLeche(quincenasService.sueldoCategoria(acopioLecheEntityList, proveedor));
                quincenasEntity.setPagoGrasa(quincenasService.sueldoGrasa(acopioLecheEntityList, grasaSolidoTotalEntity));
                quincenasEntity.setPagoSolido(quincenasService.sueldoSolido(acopioLecheEntityList, grasaSolidoTotalEntity));
                quincenasEntity.setBonificacion(quincenasService.bonificacionFrecuencia(acopioLecheEntityList));
                quincenasEntity.setDescuentoLeche(quincenasService.descuentoVariacionLeche(acopioLecheEntityList));
                quincenasEntity.setDescuentoGrasa(quincenasService.descuentoVariacionGrasa(grasaSolidoTotalEntity));
                quincenasEntity.setDescuentoSolido(quincenasService.descuentoVariacionSolidoTotal(grasaSolidoTotalEntity));
                quincenasEntity.setPagoTotal(quincenasService.pagoAcopioLeche(grasaSolidoTotalEntity, proveedor, acopioLecheEntityList));
                quincenasEntity.setRetencion(quincenasService.retencion(quincenasEntity.getPagoTotal()));
                quincenasEntity.setMontoFinal(quincenasService.pagoFinal(grasaSolidoTotalEntity, proveedor, acopioLecheEntityList));
                quincenasService.guardarQuincenas(quincenasEntity);
                return ResponseEntity.ok(quincenasEntity);
            }
        }
        return ResponseEntity.ok(null);
    }

    @GetMapping("/proveedor/{proveedor_id}")
    public ResponseEntity<QuincenasEntity> verQuincena(@PathVariable("proveedor_id") String proveedor_id){
        QuincenasEntity quincenasEntity=quincenasService.encontrarPorProveedor(proveedor_id);
        List<ProveedorEntity> proveedores = quincenasService.getProveedores();
        ProveedorEntity proveedor = null;
        for(ProveedorEntity p:proveedores){
            if(p.getProveedor_id().equals(proveedor_id)){
                proveedor = p;
                break;
            }
        }
        if(proveedor!=null){
            if(quincenasEntity == null) {
                quincenasEntity = new QuincenasEntity();
                quincenasEntity.setFecha("-");
                quincenasEntity.setProveedor_id(proveedor_id);
                quincenasEntity.setNombreProveedor(proveedor.getNombre());
                quincenasEntity.setKlsLeche(0);
                quincenasEntity.setNumeroDiasLeche(0);
                quincenasEntity.setPromedioKlsLeche(0);
                quincenasEntity.setVariacionLeche(0);
                quincenasEntity.setGrasa(0);
                quincenasEntity.setVariacionGrasa(0);
                quincenasEntity.setSolido(0);
                quincenasEntity.setVariacionSolido(0);
                quincenasEntity.setPagoLeche(0);
                quincenasEntity.setPagoGrasa(0);
                quincenasEntity.setPagoSolido(0);
                quincenasEntity.setBonificacion(0);
                quincenasEntity.setDescuentoLeche(0);
                quincenasEntity.setDescuentoGrasa(0);
                quincenasEntity.setDescuentoSolido(0);
                quincenasEntity.setPagoTotal(0);
                quincenasEntity.setRetencion(0);
                quincenasEntity.setMontoFinal(0);
            }
        }
        return ResponseEntity.ok(quincenasEntity);
    }
}
