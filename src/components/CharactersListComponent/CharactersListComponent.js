import CharacterContext from "../../store/contexts/CharacterContext";
import CharacterComponent from "../CharacterComponent/CharacterComponent";
import { useContext, useEffect } from "react";
import { CharacterList } from "./CharactersListStyleComponent";
import useApi from "../../store/hooks/useApi";

const CharactersListComponent = () => {
  const { state } = useContext(CharacterContext);
  const { loadCharacters } = useApi();

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

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
