import { render, screen } from "@testing-library/react";
import ErrorMessageComponent from "./ErrorMessageComponent";

describe("Given an ErrorMessageComponent component", () => {
  describe("When it is instantiated", () => {
    test("Then it should return a div", () => {
      const expectedAltText = "rick and morty scared";

      render(<ErrorMessageComponent />);
      const imgError = screen.getByAltText(expectedAltText);

      expect(imgError).toBeInTheDocument();
    });
  });
});
