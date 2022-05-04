import { useReducer } from "react";
import charactersReducer from "../reducers/charactersReducer";
import CharacterContext from "./CharacterContext";

const CharacterProvider = ({ children }) => {
  const initialValue = {
    characterslist: [],
  };

  const [state, dispatch] = useReducer(charactersReducer, initialValue);

  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
