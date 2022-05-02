import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <HeaderComponent />

      <Routes>
        <Route path="/" element={""} />
      </Routes>
    </div>
  );
}

export default App;
