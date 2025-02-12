import Header from "./components/Header";
import Main from "./components/Main";

// Contexts
import { CategoriesDataProvider } from "./contexts/CategoriesDataContext";

export default function App() {
  return (
    <CategoriesDataProvider>
      <Header />
      <Main />
    </CategoriesDataProvider>
  );
}
