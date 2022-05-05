import CharactersListComponent from "../../components/CharactersListComponent/CharactersListComponent";
import { useContext, useEffect } from "react";
import useApi from "../../store/hooks/useApi";
import CharacterContext from "../../store/contexts/CharacterContext";

const FavoriteComponent = () => {
  const { state } = useContext(CharacterContext);
  const { loadCharacters } = useApi();

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);
  return (
    <>
      <CharactersListComponent />
    </>
  );
};

export default FavoriteComponent;
