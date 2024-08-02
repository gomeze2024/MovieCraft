import {ApiProvider} from "./ApiContext.jsx";
import ThemeContextProvider from "./ThemeContext.jsx";
import {MovieProvider} from "./MoviesContext.jsx";

export const ContextProvider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <MovieProvider>
        <ApiProvider>
          {children}
        </ApiProvider>
      </MovieProvider>
    </ThemeContextProvider>
  );
};