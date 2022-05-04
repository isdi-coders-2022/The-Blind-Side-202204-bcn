import { useReducer } from "react";
import charactersReducer from "../reducers/charactersReducer";
import CharacterContext from "./CharacterContext";

const CharacterProvider = ({ children }) => {
  const initialValue = {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
  };

  const [state, dispatch] = useReducer(charactersReducer, initialValue);

  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
