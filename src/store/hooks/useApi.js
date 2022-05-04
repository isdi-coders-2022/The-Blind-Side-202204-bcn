import { useContext } from "react";
import { charactersLoader } from "../actions/characterActionCreator";
import CharacterContext from "../contexts/CharacterContext";

const useApi = () => {
  const { dispatch } = useContext(CharacterContext);

  const loadCharacters = (url) => {
    if (url === undefined) {
      url = "https://rickandmortyapi.com/api/character/?page=1";
    }

    (async () => {
      const response = await fetch(url);
      const characterListData = await response.json();
      dispatch(charactersLoader(characterListData));
    })();
  };

  return { loadCharacters };
};

export default useApi;
