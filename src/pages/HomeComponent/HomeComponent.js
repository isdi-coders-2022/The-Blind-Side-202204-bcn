import CharactersListComponent from "../../components/CharactersListComponent/CharactersListComponent";
import PagerComponent from "../../components/PagerComponent/PagerComponent";
import CharacterContext from "../../store/contexts/CharacterContext";
import { useContext, useEffect } from "react";
import useApi from "../../store/hooks/useApi";

const HomeComponent = () => {
  const { state } = useContext(CharacterContext);
  const { loadCharacters } = useApi();

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return (
    <>
      <CharactersListComponent state={state} />
      <PagerComponent />
    </>
  );
};

export default HomeComponent;
