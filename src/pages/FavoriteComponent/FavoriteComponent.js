import CharactersListComponent from "../../components/CharactersListComponent/CharactersListComponent";
import { useContext, useEffect } from "react";
import useApi from "../../store/hooks/useApi";
import CharacterContext from "../../store/contexts/CharacterContext";
import FormComponent from "../../components/FormComponent/FormComponent";

const FavoriteComponent = () => {
  const { state } = useContext(CharacterContext);
  const { loadLocalApiCharacter } = useApi();

  useEffect(() => {
    loadLocalApiCharacter();
  }, [loadLocalApiCharacter]);

  return (
    <>
      <FormComponent favouritedCharacters={state.localApiResults} />
      <CharactersListComponent characters={state.localApiResults} />
    </>
  );
};

export default FavoriteComponent;
