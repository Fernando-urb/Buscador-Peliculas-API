import { createContext, useContext, useState, useEffect } from 'react';

const API_KEY = 'c2da535b';
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

// Crear el contexto
export const DataContext = createContext();

// Hook personalizado para usar el contexto
export const useData = () => {
  return useContext(DataContext);
};

// Proveedor del contexto
export const DataProvider = ({ children }) => {
  const [query, setQuery] = useState('marvel');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Función para buscar películas
  const searchMovies = async (searchQuery) => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}&s=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      
      if (data.Response === 'True') {
        setMovies(data.Search || []);
      } else {
        setError(data.Error || 'No se encontraron películas');
        setMovies([]);
      }
    } catch (err) {
      setError('Error al buscar películas. Intenta de nuevo.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  // Efecto para buscar películas cuando cambia la consulta
  useEffect(() => {
    searchMovies(query);
  }, [query]);

  // Valores que estarán disponibles en el contexto
  const value = {
    query,
    setQuery,
    error,
    loading,
    movies,
    selectedMovie,
    setSelectedMovie,
    searchMovies,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
