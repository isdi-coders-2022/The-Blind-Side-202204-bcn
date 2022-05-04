import { useReducer } from "react";
import charactersReducer from "../reducers/charactersReducer";
import CharacterContext from "./CharactersContext";

const CharactersProvider = ({ children }) => {
  const initialValue = {
    characterslist: [],
    loading: true,
    buttonText: "Touch Me",
  };

  const [state, dispatch] = useReducer(charactersReducer, initialValue);

  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharactersProvider;
