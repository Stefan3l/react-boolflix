import { createContext, useState, useContext } from "react";

// Creo il contesto
const CategoriesDataContext = createContext();

// Creo il componente custom provider

function CategoriesDataProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  return (
    <CategoriesDataContext.Provider
      value={{ movies, setMovies, series, setSeries }}
    >
      {children}
    </CategoriesDataContext.Provider>
  );
}

// Definisco un hook custom per facilitate il "consumo" del contesto

function useCategoriesDataContext() {
  const context = useContext(CategoriesDataContext);
  return context;
}

export { CategoriesDataProvider, useCategoriesDataContext };
