import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterComponent from "./CharacterComponent";

describe("Given a CharacterComponent", () => {
  describe("When it's call with a character name of Paco", () => {
    test("Then it should render a chaaracter with an image with the alternative text 'Paco from Rick and Morty Show'", () => {
      const expectedAltText = "Paco from Rick and Morty Show";
      const testCharacter = {
        id: 1,
        name: "Paco",
        status: "Alive",
        species: "Human",
        image: "",
      };

      render(
        <BrowserRouter>
          <CharacterComponent character={testCharacter} />
        </BrowserRouter>
      );
      const createdImageAltText = screen.getByAltText(expectedAltText);

      expect(createdImageAltText).toBeInTheDocument();
    });
  });
});
