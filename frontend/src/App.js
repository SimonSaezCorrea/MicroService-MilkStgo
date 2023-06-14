import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainComponent from "./components/MainComponent";
import ListadoProveedores from "./components/ListadoProveedoresComponent";
import ListadoAcopioLecheComponent from "./components/ListadoAcopioLecheComponent";
import SubirExcelAcopioLecheComponent from "./components/SubirExcelAcopioLecheComponent"

function App() {
    return (
        <div>
            <Router>
                  <Routes>
                      <Route path="/" element={<MainComponent />} />
                      <Route path="/lista_proveedores" element={<ListadoProveedores />} />
                      <Route path="/lista_acopio_leche" element={<ListadoAcopioLecheComponent />} />
                      <Route path="/subir_excel_acopio" element={<SubirExcelAcopioLecheComponent />} />
                  </Routes>
            </Router>
        </div>
    );
}

export default App;
