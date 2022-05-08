import {
  characterAdd,
  characterLoad,
  characterLoadLocal,
} from "./characterActionType";

export const charactersLoader = (payload) => ({
  type: characterLoad,
  payload,
});

export const characterAdder = (character) => ({
  type: characterAdd,
  character: character,
});

export const loadLocalApi = (characters) => ({
  type: characterLoadLocal,
  characters: characters,
});
