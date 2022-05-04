import { charactersLoader } from "./characterActionCreator";
import { characterLoad } from "./characterActionType";

describe("Given characterActionCreator function", () => {
  describe("When it receives 13", () => {
    test("Then it should return an object with a property type and payLoad 13", () => {
      const character = 13;

      const expectObject = { type: characterLoad, payLoad: 13 };

      const result = charactersLoader(character);

      expect(result).toEqual(expectObject);
    });
  });
});
