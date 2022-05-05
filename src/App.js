import { Navigate, Route, Routes } from "react-router-dom";
import ErrorMessageComponent from "./components/ErrorMessageComponent/ErrorMessageComponent";
import Footer from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import HomeComponent from "./pages/HomeComponent/HomeComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="*" elementt={<ErrorMessageComponent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
