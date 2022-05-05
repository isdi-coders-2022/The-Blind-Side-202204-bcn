import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import CharactersListComponent from "./CharactersListComponent";

describe("Given a component CharacterListComponent", () => {
  describe("When its called while including a character named 'Jerry Smith'", () => {
    test("Then it should render an img that has an alt text 'Jerry Smith from Rick and Morty Show'", () => {
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
        <BrowserRouter>
          <CharactersListComponent state={initialValue} />
        </BrowserRouter>
      );

      const altImageText = screen.getByAltText(
        "Jerry Smith from Rick and Morty Show"
      );

      expect(altImageText).toBeInTheDocument();
    });
  });
});
