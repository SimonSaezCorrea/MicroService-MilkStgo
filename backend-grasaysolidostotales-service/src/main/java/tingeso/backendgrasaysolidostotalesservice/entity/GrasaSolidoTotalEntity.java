package tingeso.backendgrasaysolidostotalesservice.entity;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "solido_grasasTotales")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class GrasaSolidoTotalEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer solido_grasasTotal_id;
    private String proveedor_id;
    private String grasa;
    private String solidoTotal;

    public GrasaSolidoTotalEntity(String proveedor_id, String grasa, String solidoTotal) {
        this.proveedor_id = proveedor_id;
        this.grasa = grasa;
        this.solidoTotal = solidoTotal;
    }
}
