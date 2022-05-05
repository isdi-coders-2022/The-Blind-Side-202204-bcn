import CharacterComponent from "../CharacterComponent/CharacterComponent";
import { CharacterList } from "./CharactersListStyleComponent";

const CharactersListComponent = ({ characters }) => {
  return (
    <CharacterList>
      <div className="character-container">
        <ul>
          {characters.map((character) => {
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
