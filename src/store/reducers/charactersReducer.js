import {
  characterAdd,
  characterLoad,
  characterModify,
} from "../actions/characterActionType";

const charactersReducer = (currentState, action) => {
  let newValue;
  switch (action.type) {
    case characterLoad:
      newValue = { ...currentState };

      return newValue;

    case characterAdd:
      currentState.results.push(action.character);
      newValue = { ...currentState };

      return newValue;

    case characterModify:
      newValue = [...currentState];

      return newValue;
    default:
      newValue = { ...currentState };
      return newValue;
  }
};

export default charactersReducer;
