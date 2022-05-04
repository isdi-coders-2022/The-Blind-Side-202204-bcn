import CharacterContext from "../../store/contexts/CharacterContext";
import CharacterComponent from "../CharacterComponent/CharacterComponent";
import { useContext, useEffect } from "react";
import { charactersLoader } from "../../store/actions/characterActionCreator";
import { CharacterList } from "./CharactersStyleComponent";

const CharactersListComponent = () => {
  const { state, dispatch } = useContext(CharacterContext);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const characterListData = await response.json();
      dispatch(charactersLoader(characterListData));
    })();
  }, [dispatch]);

  return (
    <CharacterList>
      <div className="character-container">
        <ul>
          {state.results.map((character) => {
            return (
              <li key={character.id}>
                <CharacterComponent character={character} />
              </li>
            );
          })}
        </ul>
      </div>
    </CharacterList>
  );
};

export default CharactersListComponent;
