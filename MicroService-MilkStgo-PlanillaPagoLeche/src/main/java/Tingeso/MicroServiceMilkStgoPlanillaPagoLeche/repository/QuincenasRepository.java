package Tingeso.MicroServiceMilkStgoPlanillaPagoLeche.repository;

import Tingeso.MicroServiceMilkStgoPlanillaPagoLeche.entity.QuincenasEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuincenasRepository extends JpaRepository<QuincenasEntity, Integer> {
    @Query("select e from QuincenasEntity e where e.proveedor_id = :proveedor_id order by e.quincena_id desc")
    List<QuincenasEntity> encontrarUltimo(@Param("proveedor_id") String proveedor_id);

    @Query("select e from QuincenasEntity e where e.proveedor_id = :proveedor_id order by e.quincena_id desc")
    List<QuincenasEntity> encontrarPorProveedor(@Param("proveedor_id") String proveedor_id);
}
