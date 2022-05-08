import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  describe("When it is called with a text 'clic' and a function and the user clicks on it", () => {
    test("Then it should show call the passed function", () => {
      const mockFunction = jest.fn();
      const text = "Click";
      render(<Button text={text} action={mockFunction} />);
      const createdButton = screen.getByText(text);

      userEvent.click(createdButton);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
