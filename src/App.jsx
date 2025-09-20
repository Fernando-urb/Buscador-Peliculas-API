import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import SingleMovie from './components/SingleMovie';
import NotFound from './components/NotFound'; // Componente para rutas no encontradas
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<MainPage />} />
        
        {/* Ruta para ver detalles de una película */}
        <Route path="/movies/:id" element={<SingleMovie />} />
        
        {/* Redirección de rutas antiguas si es necesario */}
        <Route path="/peliculas/:id" element={<Navigate to="/movies/:id" replace />} />
        
        {/* Ruta 404 - Debe ir al final */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
