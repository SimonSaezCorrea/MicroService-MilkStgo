package Tingeso.MicroServiceMilkStgoProveedores.service;

import Tingeso.MicroServiceMilkStgoProveedores.entity.ProveedorEntity;
import Tingeso.MicroServiceMilkStgoProveedores.repository.ProveedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProveedorService {
    @Autowired
    ProveedorRepository proveedorRepository;

    public ProveedorEntity guardarProveedor(ProveedorEntity proveedor){
        ProveedorEntity proveedorNew = proveedorRepository.save(proveedor);
        return proveedorNew;
    }
    public List<ProveedorEntity> obtenerProveedores(){
        return proveedorRepository.findAll();
    }

    public String obtenerCategoria(String proveedorId){
        return proveedorRepository.encontrarCategoria(proveedorId);
    }

    public ProveedorEntity encontrarPorCodigo(String proveedorId){
        return proveedorRepository.encontrarPorCodigo(proveedorId);
    }
}