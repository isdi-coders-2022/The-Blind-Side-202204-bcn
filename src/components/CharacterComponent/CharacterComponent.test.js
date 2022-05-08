import { render, screen } from "@testing-library/react";
import { click } from "@testing-library/user-event/dist/click";
import { BrowserRouter } from "react-router-dom";
import CharacterProvider from "../../store/contexts/CharacterProvider";
import CharacterComponent from "./CharacterComponent";

describe("Given a CharacterComponent", () => {
  describe("When it's call with a character name of Paco", () => {
    test("Then it should render a chaaracter heading with the  text 'Paco'", () => {
      const testCharacter = {
        id: 1,
        name: "Paco",
        status: "Alive",
        species: "Human",
        image: "",
      };

      render(
        <BrowserRouter>
          <CharacterProvider>
            <CharacterComponent character={testCharacter} />
          </CharacterProvider>
        </BrowserRouter>
      );

      const createdHeading = screen.getByRole("heading", {
        name: /Paco/i,
      });

      expect(createdHeading).toBeInTheDocument();
    });
  });

  describe("When it's call", () => {
    test("Then it should render a character component with three buttons", () => {
      const expectedNumberofButtons = 3;
      const testCharacter = {
        id: 1,
        name: "Paco",
        status: "Alive",
        species: "Human",
        image: "",
      };

      render(
        <BrowserRouter>
          <CharacterProvider>
            <CharacterComponent character={testCharacter} />
          </CharacterProvider>
        </BrowserRouter>
      );

      const totalButtons = screen.getAllByRole("button");

      expect(totalButtons.length).toEqual(expectedNumberofButtons);
    });

    test("Then it should render a button with the title 'add-favourite'", () => {
      const testCharacter = {
        id: 1,
        name: "Paco",
        status: "Alive",
        species: "Human",
        image: "",
      };

      render(
        <BrowserRouter>
          <CharacterProvider>
            <CharacterComponent character={testCharacter} />
          </CharacterProvider>
        </BrowserRouter>
      );

      const expectedFavButton = screen.getByRole("button", {
        name: /add-favourite/i,
      });

      click(expectedFavButton);
      expect(expectedFavButton).toBeInTheDocument();
    });
  });

  describe("When it's call with a character name of Jerry", () => {
    test("Then it should render an img that has an alt text 'Jerry Smith from Rick and Morty Show'", () => {
      const testCharacter = {
        id: 1,
        name: "Jerry",
        status: "Alive",
        species: "Human",
        image: "",
      };

      render(
        <BrowserRouter>
          <CharacterProvider>
            <CharacterComponent character={testCharacter} />
          </CharacterProvider>
        </BrowserRouter>
      );

      const expectedimgAltText = screen.getByRole("img", {
        name: /Jerry from rick and morty show/i,
      });

      expect(expectedimgAltText).toBeInTheDocument();
    });
  });
});
