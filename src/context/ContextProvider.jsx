import {ApiProvider} from "./ApiContent.jsx";
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