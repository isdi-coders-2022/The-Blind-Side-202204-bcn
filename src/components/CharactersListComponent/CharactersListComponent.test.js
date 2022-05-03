import { render, screen } from "@testing-library/react";
import CharactersListComponent from "./CharactersListComponent";

describe("Given a component CharacterListComponent", () => {
  describe("When its called while including a character named 'Rick Sanchez'", () => {
    test("Then it should render an img that has an alt text 'Rick Sanchez from Rick and Morty Show'", () => {
      render(<CharactersListComponent />);

      const createdContainer = screen.getByAltText(
        "Rick Sanchez from Rick and Morty Show"
      );

      expect(createdContainer).toBeInTheDocument();
    });
  });
});
