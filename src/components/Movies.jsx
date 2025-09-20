import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ItemMovie from "./ItemMovie";

const Movies = () => {
    const { loading, movies, error } = useContext(DataContext);

    if (loading) {
        return <div className="loading"></div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    // Verificar si movies es un array antes de mapear
    if (!movies || !Array.isArray(movies) || movies.length === 0) {
        return <div>No se encontraron películas. Intenta con otra búsqueda.</div>;
    }

    return ( 
        <div className="movies-content">
            {movies.map(movie => (
                <ItemMovie 
                    key={movie.imdbID} 
                    id={movie.imdbID} 
                    type={movie.Type} 
                    title={movie.Title} 
                    poster={movie.Poster} 
                    year={movie.Year}
                />
            ))}
        </div>
    );
}
 
export default Movies;