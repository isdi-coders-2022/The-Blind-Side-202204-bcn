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
});
