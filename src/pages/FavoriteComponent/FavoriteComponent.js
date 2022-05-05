import CharactersListComponent from "../../components/CharactersListComponent/CharactersListComponent";
import { useContext, useEffect } from "react";
import useApi from "../../store/hooks/useApi";
import CharacterContext from "../../store/contexts/CharacterContext";

const FavoriteComponent = () => {
  const { state } = useContext(CharacterContext);
  const { loadLocalApiCharacter } = useApi();

  useEffect(() => {
    loadLocalApiCharacter();
  }, [loadLocalApiCharacter]);

  return (
    <>
      <CharactersListComponent characters={state.localApiResults} />
    </>
  );
};

export default FavoriteComponent;
