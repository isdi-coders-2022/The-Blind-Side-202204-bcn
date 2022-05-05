import CharacterComponent from "../CharacterComponent/CharacterComponent";

import { CharacterList } from "./CharactersListStyleComponent";

const CharactersListComponent = ({ state }) => {
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
