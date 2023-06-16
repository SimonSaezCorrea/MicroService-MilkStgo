import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainComponent from "./components/MainComponent";
import ListadoProveedores from "./components/ListadoProveedoresComponent";
import ListadoAcopioLecheComponent from "./components/ListadoAcopioLecheComponent";
import SubirExcelAcopioLecheComponent from "./components/SubirExcelAcopioLecheComponent"
import SubirExcelGrasaYSolidoTotalComponent from "./components/SubirExcelGrasaYSolidoTotalComponent";
import ListadoGrasaYSolidosTotalesComponent from "./components/ListadoGrasaYSolidosTotalesComponent";
import PlanillaDePagoTodoUsuarioComponent from "./components/PlanillaDePagoTodoUsuarioComponent";

function App() {
    return (
        <div>
            <Router>
                  <Routes>
                      <Route path="/" element={<MainComponent />} />
                      <Route path="/lista_proveedores" element={<ListadoProveedores />} />
                      <Route path="/lista_acopio_leche" element={<ListadoAcopioLecheComponent />} />
                      <Route path="/lista_grasa_y_solido" element={<ListadoGrasaYSolidosTotalesComponent />} />
                      <Route path="/subir_excel_acopio" element={<SubirExcelAcopioLecheComponent />} />
                      <Route path="/subir_excel_grasa_solido" element={<SubirExcelGrasaYSolidoTotalComponent />} />
                      <Route path="/planilla_de_pago" element={<PlanillaDePagoTodoUsuarioComponent />} />
                  </Routes>
            </Router>
        </div>
    );
}

export default App;
