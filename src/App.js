import { Route, Routes } from "react-router-dom";
import CharacterDetailComponent from "./components/CharacterDetailComponent/CharacterDetailComponent";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={""} />
      </Routes>
    </div>
  );
}

export default App;
