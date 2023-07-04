package tingeso.backendplanilladepagoservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AcopioLecheEntity {
    private Integer Quincena_id;
    private String fecha;
    private String turno;
    private String proveedor_id;
    private String kls_leche;
}
