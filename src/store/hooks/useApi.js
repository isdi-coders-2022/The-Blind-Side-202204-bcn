import { useCallback, useContext } from "react";
import {
  charactersLoader,
  loadLocalApi,
} from "../actions/characterActionCreator";
import CharacterContext from "../contexts/CharacterContext";

const useApi = () => {
  const { dispatch } = useContext(CharacterContext);

  const loadCharacters = useCallback(
    (url = "https://rickandmortyapi.com/api/character/?page=1") => {
      (async () => {
        const response = await fetch(url);
        const characterListData = await response.json();
        dispatch(charactersLoader(characterListData));
      })();
    },
    [dispatch]
  );

  const loadLocalApiCharacter = useCallback(() => {
    (async () => {
      const response = await fetch(
        "https://characters-api.onrender.com/characters/"
      );
      const characterListData = await response.json();
      dispatch(loadLocalApi(characterListData));
    })();
  }, [dispatch]);

  const deleteCharacter = (id) => {
    (async () => {
      await fetch(`https://characters-api.onrender.com/characters/${id}`, {
        method: "DELETE",
      });
      loadLocalApiCharacter();
    })();
  };

  const addCharacter = (character) => {
    (async () => {
      await fetch(`https://characters-api.onrender.com/characters/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(character),
      });
      loadLocalApiCharacter();
    })();
  };

  return {
    loadCharacters,
    deleteCharacter,
    loadLocalApiCharacter,
    addCharacter,
  };
};

export default useApi;
