import { Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home';
import { Skills } from '../pages/Skills';
import { Proyectos } from '../pages/Proyectos';
import { Contacto } from '../pages/Contactos';
import { Certificaciones } from '../pages/Certificaciones';


export default function MyRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/skills" element={<Skills />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/certificaciones" element={<Certificaciones />} />
        <Route path="/contacto" element={<Contacto />} />
    </Routes>
  )
}
