import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import SpinnerComponent from "./components/SpinnerComponent/SpinnerComponent";
import HomeComponent from "./pages/HomeComponent/HomeComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeComponent />} />
      </Routes>
      <SpinnerComponent />
      <Footer />
    </div>
  );
}

export default App;
