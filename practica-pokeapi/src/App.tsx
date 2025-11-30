

// Importamos lo necesario de React Router y las páginas
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Gen1 from './pages/Gen1';
import Gen2 from './pages/Gen2';
import Gen3 from './pages/Gen3';
import Digimon from './pages/Digimon';
import NotFound from './pages/NotFound';
import './App.css';


// Componente principal de la app
function App() {
  return (
    <Router>
      {/* Barra de navegación simple */}
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/gen1">Gen1</Link>
        <Link to="/gen2">Gen2</Link>
        <Link to="/gen3">Gen3</Link>
        <Link to="/digimon">Digimon</Link>
      </nav>
      {/* Definimos las rutas de la app */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gen1" element={<Gen1 />} />
        <Route path="/gen2" element={<Gen2 />} />
        <Route path="/gen3" element={<Gen3 />} />
        <Route path="/digimon" element={<Digimon />} />
        {/* Ruta para página no encontrada */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
