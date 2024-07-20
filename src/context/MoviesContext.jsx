import { createContext, useContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [numAddMovies, setNumAddMovies] = useState(4);

    return (
        <MovieContext.Provider value={{ movies, setMovies, numAddMovies, setNumAddMovies}}>
            {children}
        </MovieContext.Provider>
    );
};
