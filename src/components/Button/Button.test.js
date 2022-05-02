import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is called with a text 'clic'", () => {
    test("Then it should show a button in the web with the text 'clic'", () => {
      const expectedText = "Click";
      const text = "Click";

      render(<Button text={text} />);
      const expectedElement = screen.getByText(expectedText);

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
