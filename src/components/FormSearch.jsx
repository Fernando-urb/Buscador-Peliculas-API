import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { searchMovies, error } = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            searchMovies(searchTerm);
        }
    };

    return ( 
        <div className="form-search">
            <h2>Buscador de Películas</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Título de la película" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input type="submit" value="Buscar" />
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};
 
export default FormSearch;