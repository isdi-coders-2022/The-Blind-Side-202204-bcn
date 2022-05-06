import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterProvider from "../../store/contexts/CharacterProvider";
import CharacterComponent from "./CharacterComponent";

describe("Given a CharacterComponent", () => {
  describe("When it's call with a character name of Paco", () => {
    test("Then it should render a chaaracter heading with the  text 'Paco'", () => {
      const expectedHeading = "Paco";
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

      const createdHeading = screen.getByRole("heading").textContent;

      expect(createdHeading).toEqual(expectedHeading);
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
  });
  describe("When it's call with a character name of Jerry", () => {
    test("Then it should render an img that has an alt text 'Jerry Smith from Rick and Morty Show'", () => {
      const expectedHeading = "Jerry from Rick and Morty Show";
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

      const createdHeading = screen.getByAltText(expectedHeading);

      expect(createdHeading).toBeInTheDocument();
    });
  });
});
