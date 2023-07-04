package tingeso.backendacopiolecheservice.repository;

import Tingeso.MicroServiceMilkStgoAcopioLeche.entity.AcopioLecheEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AcopioLecheRepository extends JpaRepository<AcopioLecheEntity, Integer>{
    @Query("select e from AcopioLecheEntity e where e.acopio_leche_id = :acopio_leche_id")
    AcopioLecheEntity encontrarPorID(@Param("acopio_leche_id")Integer acopio_leche_id);

    @Query("select e from AcopioLecheEntity e where e.proveedor_id = :proveedor_id")
    List<AcopioLecheEntity> encontrarPorProveedor(@Param("proveedor_id")String proveedor_id);
}