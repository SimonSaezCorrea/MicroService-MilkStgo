package tingeso.backendproveedorservice.repository;

import tingeso.backendproveedorservice.entity.ProveedorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProveedorRepository extends JpaRepository<ProveedorEntity, String>{
    @Query("select e from ProveedorEntity e where e.nombre = :nombre")
    ProveedorEntity encontrarPorNombre(@Param("nombre") String nombre);

    @Query("select e.categoria from ProveedorEntity e where e.proveedor_id = :proveedor_id")
    String encontrarCategoria(@Param("proveedor_id") String codigo);

    @Query("select e from ProveedorEntity e where e.proveedor_id = :proveedor_id")
    ProveedorEntity encontrarPorCodigo(@Param("proveedor_id")String codigo);
}