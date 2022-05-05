import { useCallback, useContext } from "react";
import {
  charactersLoader,
  loadLocalApi,
} from "../actions/characterActionCreator";
import { characterLoadLocal } from "../actions/characterActionType";
import CharacterContext from "../contexts/CharacterContext";

const useApi = () => {
  const { dispatch } = useContext(CharacterContext);

  const loadCharacters = useCallback(
    (url) => {
      if (url === undefined) {
        url = "https://rickandmortyapi.com/api/character/?page=1";
      }

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
      const localApiResponse = await fetch(
        `https://characters-api.onrender.com/characters/${id}`,
        {
          method: "DELETE",
        }
      );
      alert("Holaaa");
      await localApiResponse.json();
      loadLocalApiCharacter();
    })();
  };

  return { loadCharacters, deleteCharacter, loadLocalApiCharacter };
};

export default useApi;
