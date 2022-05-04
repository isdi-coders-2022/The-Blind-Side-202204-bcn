import { render, screen } from "@testing-library/react";
import SpinnerComponent from "./SpinnerComponent";

describe("Given a SpinnerComponent component", () => {
  describe("When it's call", () => {
    test("Then it should render a SpinnerComponent with 3 div item", () => {
      render(<SpinnerComponent />);

      const expectedNumOfDiv = 3;

      const totalDiv = screen.getAllByAltText("div");

      expect(totalDiv.length).toBe(expectedNumOfDiv);
    });
  });
});
