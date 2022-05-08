import {
  characterAdder,
  charactersLoader,
  loadLocalApi,
} from "./characterActionCreator";
import {
  characterAdd,
  characterLoad,
  characterLoadLocal,
} from "./characterActionType";

describe("Given characterActionCreator function", () => {
  describe("When the action chracterLoader receives 13", () => {
    test("Then it should return an object with a property type and payLoad 13", () => {
      const character = 13;

      const expectObject = { type: characterLoad, payload: 13 };

      const result = charactersLoader(character);

      expect(result).toEqual(expectObject);
    });
  });
  describe("When the action characterAdder receives a new character", () => {
    test("Then it should return a object with the new character added", () => {
      const newCharacter = {
        id: 6,
        name: "Jerry Smith",
        status: "Alive",
      };

      const expectObject = {
        type: characterAdd,
        character: {
          id: 6,
          name: "Jerry Smith",
          status: "Alive",
        },
      };

      const result = characterAdder(newCharacter);

      expect(result).toEqual(expectObject);
    });
  });

  describe("When the action loadLocalApi receives a new character", () => {
    test("Then it should return a object with the new character added", () => {
      const newCharacter = {
        id: 6,
        name: "Jerry Smith",
        status: "Alive",
      };

      const expectObject = {
        type: characterLoadLocal,
        characters: {
          id: 6,
          name: "Jerry Smith",
          status: "Alive",
        },
      };

      const result = loadLocalApi(newCharacter);

      expect(result).toEqual(expectObject);
    });
  });
});
