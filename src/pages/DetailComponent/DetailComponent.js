import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterDetailComponent from "../../components/CharacterDetailComponent/CharacterDetailComponent";
import CharacterContext from "../../store/contexts/CharacterContext";
import useApi from "../../store/hooks/useApi";

const DetailComponent = () => {
  const { id } = useParams();

  const { state } = useContext(CharacterContext);
  const { loadCharacters } = useApi();

  useEffect(() => {
    loadCharacters(`https://rickandmortyapi.com/api/character/${id}`);
  }, [loadCharacters, id]);

  return <CharacterDetailComponent character={state} />;
};

export default DetailComponent;
