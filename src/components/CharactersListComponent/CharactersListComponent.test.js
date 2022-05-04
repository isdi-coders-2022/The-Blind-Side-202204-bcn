import { render, screen } from "@testing-library/react";
import CharacterProvider from "../../store/contexts/CharacterProvider";
import CharactersListComponent from "./CharactersListComponent";

describe("Given a component CharacterListComponent", () => {
  describe("When its called while including a character named 'Rick Sanchez'", () => {
    test("Then it should render an img that has an alt text 'Rick Sanchez from Rick and Morty Show'", () => {
      render(
        <CharacterProvider>
          <CharactersListComponent />
        </CharacterProvider>
      );

      const totalList = screen.getByRole("list");

      expect(totalList).toBeInTheDocument();
    });
  });
});
