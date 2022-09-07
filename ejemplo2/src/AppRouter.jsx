import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import { Carga } from "./Carga";
import { PDFGenerar } from "./PDFGenerar";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/carga" element={<Carga />} />
            <Route path="/pdf" element={<PDFGenerar /> }/>
            <Route path="/*" element={<Navigate to="/"/> } />
        </Routes>
    )
}
