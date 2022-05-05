import { render, screen } from "@testing-library/react";
import CharacterProvider from "../../store/contexts/CharacterProvider";
import FavoriteComponent from "./FavoriteComponent";

describe("Given a FavoriteComponent", () => {
  describe("When it is instantiated", () => {
    test("Then it should render at least one li", () => {
      render(
        <CharacterProvider>
          <FavoriteComponent />
        </CharacterProvider>
      );

      const totalList = screen.getByRole("list");

      expect(totalList).toBeInTheDocument();
    });
  });
});
