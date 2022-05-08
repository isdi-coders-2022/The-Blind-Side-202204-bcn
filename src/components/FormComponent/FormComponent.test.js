import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FormComponent from "./FormComponent";

const mockAddCharacter = jest.fn();
jest.mock("../../store/hooks/useApi", () => () => {
  return { addCharacter: mockAddCharacter };
});

describe("Given a FormComponent", () => {
  describe("When the form is rendered", () => {
    test("It should contain all inputs", () => {
      render(<FormComponent favouritedCharacters={[]} />);

      const nameField = screen.getByPlaceholderText("Name");
      const statusField = screen.getByPlaceholderText("Status");
      const speciesField = screen.getByPlaceholderText("Species");
      const genderField = screen.getByPlaceholderText("Gender");

      expect(nameField).toBeInTheDocument();
      expect(statusField).toBeInTheDocument();
      expect(speciesField).toBeInTheDocument();
      expect(genderField).toBeInTheDocument();
    });
  });
  describe("When the user click on submit button with all fields filled", () => {
    test("Then it should call the api with the method addcharacter", () => {
      render(<FormComponent favouritedCharacters={[]} />);

      const button = screen.getByRole("button");
      const nameField = screen.getByPlaceholderText("Name");
      const statusField = screen.getByPlaceholderText("Status");
      const speciesField = screen.getByPlaceholderText("Species");
      const genderField = screen.getByPlaceholderText("Gender");

      userEvent.type(nameField, "a");
      userEvent.type(statusField, "b");
      userEvent.type(speciesField, "c");
      userEvent.type(genderField, "d");

      userEvent.click(button);

      expect(mockAddCharacter).toBeCalled();
    });
  });
  describe("When the user filled the fields with a,b, c and d", () => {
    test("Then it should called api with those values", () => {
      render(<FormComponent favouritedCharacters={[]} />);

      const button = screen.getByRole("button");
      const nameField = screen.getByPlaceholderText("Name");
      const statusField = screen.getByPlaceholderText("Status");
      const speciesField = screen.getByPlaceholderText("Species");
      const genderField = screen.getByPlaceholderText("Gender");

      userEvent.type(nameField, "a");
      userEvent.type(statusField, "b");
      userEvent.type(speciesField, "c");
      userEvent.type(genderField, "d");

      userEvent.click(button);

      const createdCharacter = mockAddCharacter.mock.calls[0][0];

      expect(createdCharacter.name).toBe("a");
      expect(createdCharacter.status).toBe("b");
      expect(createdCharacter.species).toBe("c");
      expect(createdCharacter.gender).toBe("d");
    });
  });
});
