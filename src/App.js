import { Navigate, Route, Routes } from "react-router-dom";
import ErrorMessageComponent from "./components/ErrorMessageComponent/ErrorMessageComponent";
import Footer from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import DetailComponent from "./pages/DetailComponent/DetailComponent";
import FavoriteComponent from "./pages/FavoriteComponent/FavoriteComponent";
import HomeComponent from "./pages/HomeComponent/HomeComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/*" element={<ErrorMessageComponent />} />
        <Route path="/detail/:id" element={<DetailComponent />} />
        <Route path="/favorites" element={<FavoriteComponent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
