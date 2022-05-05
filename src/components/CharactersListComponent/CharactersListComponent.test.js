import { cleanup, render, screen } from "@testing-library/react";
import CharacterProvider from "../../store/contexts/CharacterProvider";
import CharactersListComponent from "./CharactersListComponent";

describe("Given a component CharacterListComponent", () => {
  describe("When its called while including a character named 'Jerry Smith'", () => {
    test.afterEach(cleanup);
    test("Then it should render an img that has an alt text 'Jerry Smith' from Rick and Morty Show'", () => {
      const initialValue = {
        info: {
          count: 0,
          pages: 0,
          next: null,
          prev: null,
        },
        results: [
          {
            id: 6,
            name: "Jerry Smith",
            image: "mockimage.jpg",
            status: "Alive",
          },
        ],
      };

      render(
        <CharacterProvider>
          <CharactersListComponent state={initialValue} />
        </CharacterProvider>
      );

      const totalList = screen.getAllByAltText("Jerry Smith");

      expect(totalList).toBeInTheDocument();
    });
  });
});
