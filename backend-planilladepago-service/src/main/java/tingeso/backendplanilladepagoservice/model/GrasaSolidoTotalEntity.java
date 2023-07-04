package tingeso.backendplanilladepagoservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GrasaSolidoTotalEntity {
    private Integer Quincena_id;
    private String proveedor_id;
    private String grasa;
    private String solidoTotal;
}
