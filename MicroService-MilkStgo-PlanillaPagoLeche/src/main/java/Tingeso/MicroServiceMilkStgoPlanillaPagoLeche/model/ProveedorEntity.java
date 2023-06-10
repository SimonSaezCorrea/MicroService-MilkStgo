package Tingeso.MicroServiceMilkStgoPlanillaPagoLeche.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProveedorEntity {
    private Integer Quincena_id;
    private String nombre;
    private String categoria;
    private String afecto_retencion;
}
