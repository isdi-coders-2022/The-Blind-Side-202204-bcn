import CharacterContext from "../../store/contexts/CharacterContext";
import CharacterComponent from "../CharacterComponent/CharacterComponent";
import { useContext, useEffect } from "react";

const CharactersListComponent = () => {
  // const characterslist = [
  //   {
  //     id: 1,
  //     name: "Rick Sanchez",
  //     status: "Alive",
  //     species: "Human",
  //     type: "",
  //     gender: "Male",
  //     origin: {
  //       name: "Earth (C-137)",
  //       url: "https://rickandmortyapi.com/api/location/1",
  //     },
  //     location: {
  //       name: "Citadel of Ricks",
  //       url: "https://rickandmortyapi.com/api/location/3",
  //     },
  //     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  //     episode: [],
  //     url: "https://rickandmortyapi.com/api/character/1",
  //     created: "2017-11-04T18:48:46.250Z",
  //   },
  //   {
  //     id: 2,
  //     name: "Morty Smith",
  //     status: "Alive",
  //     species: "Human",
  //     type: "",
  //     gender: "Male",
  //     origin: {
  //       name: "unknown",
  //       url: "",
  //     },
  //     location: {
  //       name: "Citadel of Ricks",
  //       url: "https://rickandmortyapi.com/api/location/3",
  //     },
  //     image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  //     episode: [],
  //     url: "https://rickandmortyapi.com/api/character/2",
  //     created: "2017-11-04T18:50:21.651Z",
  //   },
  // ];

  const { state, dispatch } = useContext(CharacterContext);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const characterListData = await response.json();
      dispatch({ type: "load", payload: characterListData.results });
    })();
  }, [dispatch]);

  return (
    <div className="character-container">
      <ul>
        {characterListData.results.map((character) => {
          return (
            <li key={character.id}>
              <CharacterComponent character={character} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CharactersListComponent;
