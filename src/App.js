import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import PagerComponent from "./components/PagerComponent/PagerComponent";
import HomeComponent from "./pages/HomeComponent/HomeComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeComponent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
