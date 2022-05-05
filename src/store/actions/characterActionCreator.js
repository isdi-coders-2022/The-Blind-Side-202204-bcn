import {
  characterAdd,
  characterDelete,
  characterLoad,
  characterLoadLocal,
  characterModify,
} from "./characterActionType";

export const charactersLoader = (payload) => ({
  type: characterLoad,
  payload,
});

export const characterAdder = (character) => ({
  type: characterAdd,
  character: character,
});

export const characterModifier = (character) => ({
  type: characterModify,
  character: character,
});

export const characterDeleter = (character) => ({
  type: characterDelete,
  character: character,
});

export const loadLocalApi = (characters) => ({
  type: characterLoadLocal,
  characters: characters,
});
