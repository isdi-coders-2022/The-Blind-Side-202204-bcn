import { render, screen } from "@testing-library/react";
import CharacterProvider from "../../store/contexts/CharacterProvider";
import PagerComponent from "./PagerComponent";

describe("Given a pagerComponent", () => {
  describe("When it is instantiated", () => {
    test("Then it should print a span element", () => {
      const text = "21-30";

      render(
        <CharacterProvider>
          <PagerComponent />
        </CharacterProvider>
      );

      const textPager = screen.getByText(text);

      expect(textPager).toBeInTheDocument();
    });
  });

  describe("When it is call", () => {
    test("Then it should render a titled 'previous-page' button", () => {
      render(
        <CharacterProvider>
          <PagerComponent />
        </CharacterProvider>
      );

      const previousPageButton = screen.getByRole("button", {
        name: /previous-page/i,
      });

      expect(previousPageButton).toBeInTheDocument();
    });

    test("Then it should render a titled 'next-page' button", () => {
      render(
        <CharacterProvider>
          <PagerComponent />
        </CharacterProvider>
      );

      const previousPageButton = screen.getByRole("button", {
        name: /next-page/i,
      });

      expect(previousPageButton).toBeInTheDocument();
    });
  });
});
