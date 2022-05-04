import { characterAdd, characterLoad } from "./characterActionType";

export const charactersLoader = (payLoad) => ({
  type: characterLoad,
  payLoad,
});

export const characterAdder = (character) => ({
  type: characterAdd,
  character: character,
});
