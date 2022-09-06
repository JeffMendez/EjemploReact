import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import { Carga } from "./Carga";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/carga" element={<Carga />} />
            <Route path="/*" element={<Navigate to="/"/> } />
        </Routes>
    )
}
