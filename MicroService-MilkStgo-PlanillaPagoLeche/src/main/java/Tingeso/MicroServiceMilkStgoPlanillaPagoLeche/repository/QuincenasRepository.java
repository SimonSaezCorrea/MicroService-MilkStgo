package Tingeso.MicroServiceMilkStgoPlanillaPagoLeche.repository;

import Tingeso.MicroServiceMilkStgoPlanillaPagoLeche.entity.QuincenasEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuincenasRepository extends JpaRepository<QuincenasEntity, String> {
    @Query("select e from QuincenasEntity e where e.proveedor_id = :proveedor_id order by quincena_id desc limit 1")
    QuincenasEntity encontrarUltimo(@Param("proveedor_id") String proveedor_id);

    @Query("select e from QuincenasEntity e where e.proveedor_id = :proveedor_id")
    List<QuincenasEntity> encontrarTodos(@Param("proveedor_id") String proveedor_id);

    @Query("select e from QuincenasEntity e where e.proveedor_id = :proveedor_id and e.fecha = :fecha")
    QuincenasEntity encontrarPorFechaYProveedor(@Param("proveedor_id") String proveedor_id, @Param("fecha") String fecha);
}
