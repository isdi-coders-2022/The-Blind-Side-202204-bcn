import {
  characterAdd,
  characterLoad,
  characterModify,
} from "./characterActionType";

const charactersReducer = (currentState, action) => {
  let newValue;

  switch (action.type) {
    case characterLoad:
      newValue = { ...currentState };

      break;

    case characterAdd:
      currentState.results.push(action.character);
      newValue = { ...currentState };

      break;

    case characterModify:
      newValue = [...currentState];

      break;
    default:
      newValue = { ...currentState };
  }
};

export default charactersReducer;
