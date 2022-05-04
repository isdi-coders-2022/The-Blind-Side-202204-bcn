import {
  characterAdd,
  characterLoad,
  characterModify,
} from "../actions/characterActionType";

const charactersReducer = (currentState, action) => {
  let newValue;
  switch (action.type) {
    case characterLoad:
      newValue = { ...action.payload };
      return newValue;
    default:
      newValue = { ...currentState };
      return newValue;
  }
};

export default charactersReducer;
