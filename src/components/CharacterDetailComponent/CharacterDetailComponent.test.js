import { render, screen } from "@testing-library/react";
import CharacterDetailComponent from "./CharacterDetailComponent";

describe("Given a CharacterDetailComponent", () => {
  describe("When it is instantiated", () => {
    test("Then it should create five li elements", () => {
      const testCharacter = [
        {
          id: 1,
          name: "Jerry Smith",
          status: "Alive",
          species: "Human",
          image: "",
        },
      ];

      render(<CharacterDetailComponent character={testCharacter} />);

      const expectedNumOfLi = 3;

      const totalList = screen.getAllByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfLi);
    });
  });
});
