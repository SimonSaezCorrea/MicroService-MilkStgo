import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlanillaDePagoService from "../services/PlanillaDePagoService";
import HeaderComponentPlanillaUsuario from "./Headers/HeaderComponentPlanillaUsuario";

export default function PlanillaDePagoComponent() {
    const { proveedor_id } = useParams();
    const [quincenasEntity, setQuincenasEntity] = useState(null);
    useEffect(() => {
        PlanillaDePagoService.getPlanillaDePago(proveedor_id).then((res) => {
            setQuincenasEntity(res.data);
        });
    }, [proveedor_id]);
    return (
        <div>
            <HeaderComponentPlanillaUsuario></HeaderComponentPlanillaUsuario>
            <div align="center">
                <h1>
                    {quincenasEntity && (
                        <>
                            <b> Plantilla Pago {quincenasEntity.nombreProveedor}</b>
                        </>
                    )}
                </h1>
                <table border="1" class="content-table">
                    <thead>
                        <tr>
                            <th>Código Proveedor</th>
                            <th>Nombre Proveedor</th>
                            <th>Última fecha</th>
                            <th>Bonificación</th>
                            <th>Pago Total</th>
                            <th>Retención</th>
                            <th>Monto Final</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {quincenasEntity && (
                                <>
                                    <td>{quincenasEntity.proveedor_id}</td>
                                    <td>{quincenasEntity.nombreProveedor}</td>
                                    <td>{quincenasEntity.fecha}</td>
                                    <td>{quincenasEntity.bonificacion}</td>
                                    <td>{quincenasEntity.pagoTotal}</td>
                                    <td>{quincenasEntity.retencion}</td>
                                    <td>{quincenasEntity.montoFinal}</td>
                                </>
                            )}
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>Kls de Leche</th>
                            <th>Número de días consecutivos</th>
                            <th>Promedio de Kls de Leche</th>
                            <th>Variación de Leche</th>
                            <th>Pagro de Leche</th>
                            <th>Descuento de Leche</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {quincenasEntity && (
                                <>
                                    <td>{quincenasEntity.klsLeche}</td>
                                    <td>{quincenasEntity.numeroDiasLeche}</td>
                                    <td>{quincenasEntity.promedioKlsLeche}</td>
                                    <td>{quincenasEntity.variacionLeche}</td>
                                    <td>{quincenasEntity.pagoLeche}</td>
                                    <td>{quincenasEntity.descuentoLeche}</td>
                                </>
                            )}
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>Porcentaje Grasa</th>
                            <th>Variación de Grasa</th>
                            <th>Pagro de Grasa</th>
                            <th>Descuento de Grasa</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {quincenasEntity && (
                                <>
                                    <td>{quincenasEntity.grasa}</td>
                                    <td>{quincenasEntity.variacionGrasa}</td>
                                    <td>{quincenasEntity.pagoGrasa}</td>
                                    <td>{quincenasEntity.fecha}</td>
                                </>
                            )}
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>Porcentaje Grasa</th>
                            <th>Variación de Grasa</th>
                            <th>Pago de Solido</th>
                            <th>Descuento de Solido</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {quincenasEntity && (
                                <>
                                    <td>{quincenasEntity.solido}</td>
                                    <td>{quincenasEntity.variacionSolido}</td>
                                    <td>{quincenasEntity.pagoSolido}</td>
                                    <td>{quincenasEntity.descuentoSolido}</td>
                                </>
                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
