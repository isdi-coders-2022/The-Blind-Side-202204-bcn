import { render, screen } from "@testing-library/react";
import CharacterProvider from "../../store/contexts/CharacterProvider";
import HomeComponent from "./HomeComponent";

describe("Given a HomeComponent", () => {
  describe("When it is instantiated", () => {
    test("Then it should render at least one li", () => {
      render(
        <CharacterProvider>
          <HomeComponent />
        </CharacterProvider>
      );

      const totalList = screen.getByRole("list");

      expect(totalList).toBeInTheDocument();
    });
  });
});
