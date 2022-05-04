import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import HomeComponent from "./pages/HomeComponent/HomeComponent";
import CharactersProvider from "./store/contexts/CharacterProvider";

function App() {
  return (
    <div className="App">
      <CharactersProvider>
        <HeaderComponent />
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeComponent />} />
        </Routes>
        <Footer />
      </CharactersProvider>
    </div>
  );
}

export default App;
