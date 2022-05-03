import { Route, Routes } from "react-router-dom";
import CharactersLiestComponent from "./components/CharactersLiestComponent/CharactersLiestComponent";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <CharactersLiestComponent />
      <Routes>
        <Route path="/" element={""} />
      </Routes>
    </div>
  );
}

export default App;
