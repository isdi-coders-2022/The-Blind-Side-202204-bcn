import {
  characterAdder,
  characterModifier,
  charactersLoader,
} from "./characterActionCreator";
import {
  characterAdd,
  characterLoad,
  characterModify,
} from "./characterActionType";

describe("Given characterActionCreator function", () => {
  describe("When the action chracterLoader receives 13", () => {
    test("Then it should return an object with a property type and payLoad 13", () => {
      const character = 13;

      const expectObject = { type: characterLoad, payLoad: 13 };

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
  describe("When the action characterModify receives a new character", () => {
    test("Then it should return a object with the new character to modify", () => {
      const newCharacter = {
        id: 6,
        name: "Jerry Smith",
        status: "Alive",
      };

      const expectObject = {
        type: characterModify,
        character: {
          id: 6,
          name: "Jerry Smith",
          status: "Alive",
        },
      };

      const result = characterModifier(newCharacter);

      expect(result).toEqual(expectObject);
    });
  });
});
