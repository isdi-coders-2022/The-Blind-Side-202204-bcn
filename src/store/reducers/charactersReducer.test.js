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

      const newCharacterLoaded = charactersReducer(
        currentCharacter,
        actionType
      );

      expect(newCharacterLoaded).toEqual(expectedObjectResult);
    });
  });
});
