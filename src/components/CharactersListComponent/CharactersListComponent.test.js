import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterProvider from "../../store/contexts/CharacterProvider";
import CharactersListComponent from "./CharactersListComponent";

describe("Given a component CharacterListComponent", () => {
  describe("When its called while including a character named 'Jerry Smith'", () => {
    test("Then it should render an img that has an alt text 'Jerry Smith from Rick and Morty Show'", () => {
      const expectedNumberofButtons = 3;

      const testCharacter = [
        {
          id: 1,
          name: "Jerry Smith",
          status: "Alive",
          species: "Human",
          image: "",
        },
      ];

      render(
        <BrowserRouter>
          <CharacterProvider>
            <CharactersListComponent characters={testCharacter} />
          </CharacterProvider>
        </BrowserRouter>
      );

      const numberofButtons = screen.getAllByRole("button");

      expect(numberofButtons.length).toBe(expectedNumberofButtons);
    });
  });
});
