import { Route, Routes } from "react-router-dom";
import CharactersListComponent from "./components/CharactersListComponent/CharactersListComponent";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <CharactersListComponent />
      <Routes>
        <Route path="/" element={""} />
      </Routes>
    </div>
  );
}

export default App;
