import { render, screen } from "@testing-library/react";
import PagerComponent from "./PagerComponent";

describe("Given a pagerComponent", () => {
  describe("When it is instantiated", () => {
    test("Then it should print a span element", () => {
      const text = "21-30";

      render(<PagerComponent />);

      const textPager = screen.getByText(text);

      expect(textPager).toBeInTheDocument();
    });
  });
});
