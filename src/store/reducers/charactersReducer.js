import {
  characterAdd,
  characterLoad,
  characterModify,
} from "./characterActionCreator";
const charactersReducer = (currentState, action) => {
  let newValue;

  switch (action.type) {
    case characterLoad:
      newValue = [...currentState];

      break;

    case characterAdd:
      newValue = [...currentState, action.character];

      break;

    case characterModify:
      newValue = [...currentState];

      break;
    default:
      newValue = [...currentState];
  }
};

export default charactersReducer;
