import {
  characterLoad,
  characterLoadLocal,
} from "../actions/characterActionType";

const charactersReducer = (currentState, action) => {
  let newValue;
  switch (action.type) {
    case characterLoad:
      newValue = { ...currentState, ...action.payload };
      return newValue;

    case characterLoadLocal:
      newValue = { ...currentState, localApiResults: action.characters };
      return newValue;
    default:
      newValue = { ...currentState };
      return newValue;
  }
};

export default charactersReducer;
