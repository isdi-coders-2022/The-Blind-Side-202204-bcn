import {
  characterAdd,
  characterLoad,
  characterModify,
} from "./characterActionType";

export const charactersLoader = (payLoad) => ({
  type: characterLoad,
  payLoad,
});

export const characterAdder = (character) => ({
  type: characterAdd,
  character: character,
});

export const characterModifier = (character) => ({
  type: characterModify,
  character: character,
});
