import { Route, Routes } from "react-router-dom";
import CharacterComponent from "./components/CharacterComponent/CharacterComponent";
const testCharacter = {
  id: 5,
  name: "Jerry Smith",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {},
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
  episode: [],
  url: "https://rickandmortyapi.com/api/character/5",
  created: "2017-11-04T19:26:56.301Z",
};

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <CharacterComponent character={testCharacter} />
      <Routes>
        <Route path="/" element={""} />
      </Routes>
    </div>
  );
}

export default App;
