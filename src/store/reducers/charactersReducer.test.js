import { characterLoad } from "../actions/characterActionType";
import charactersReducer from "./charactersReducer";

describe("Given the chractersReducer function", () => {
  describe("When it receives a character and an incorrect action", () => {
    test("Then it should return an object including the given character", () => {
      const currentCharacter = {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
      };

      const actionType = {
        type: "notDefined",
      };

      const expectedObjectResult = {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
      };

      const newCharacterbyDefault = charactersReducer(
        currentCharacter,
        actionType
      );

      expect(newCharacterbyDefault).toEqual(expectedObjectResult);
    });
  });

  describe("When it receives two characters and action type characterLoad", () => {
    test("Then it should return an object including the given characters", () => {
      const currentCharacters = {
        info: {
          count: 826,
          pages: 42,
          next: "https://rickandmortyapi.com/api/character/?page=2",
          prev: null,
        },
        results: {
          0: {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
          },
          1: { id: 2, name: "Morty Smith", status: "Alive", species: "Human" },
        },
      };

      const actionType = {
        type: characterLoad,
        payload: currentCharacters,
      };

      const expectedObjectResult = {
        info: {
          count: 826,
          pages: 42,
          next: "https://rickandmortyapi.com/api/character/?page=2",
          prev: null,
        },
        results: {
          0: {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
          },
          1: { id: 2, name: "Morty Smith", status: "Alive", species: "Human" },
        },
      };

      const newCharactersLoaded = charactersReducer(
        currentCharacters,
        actionType
      );

      expect(newCharactersLoaded).toEqual(expectedObjectResult);
    });
  });
});
