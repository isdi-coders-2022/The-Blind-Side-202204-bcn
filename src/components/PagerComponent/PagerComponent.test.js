import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CharacterProvider from "../../store/contexts/CharacterProvider";
import PagerComponent from "./PagerComponent";

const mockLoadCharacters = jest.fn();
jest.mock("../../store/hooks/useApi", () => () => {
  return { loadCharacters: mockLoadCharacters };
});

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

      const nextPageButton = screen.getByRole("button", {
        name: /next-page/i,
      });

      expect(nextPageButton).toBeInTheDocument();
    });
  });
  describe("When the user click on next button page", () => {
    test("Then it should call the loadcharacter function from custom hook", () => {
      render(
        <CharacterProvider>
          <PagerComponent />
        </CharacterProvider>
      );

      const nextPageButton = screen.getByRole("button", {
        name: /next-page/i,
      });

      userEvent.click(nextPageButton);

      expect(mockLoadCharacters).toBeCalled();
    });
  });
  describe("When the user click on previous button page", () => {
    test("Then it should call the loadcharacter function from custom hook", () => {
      render(
        <CharacterProvider>
          <PagerComponent />
        </CharacterProvider>
      );

      const previousPageButton = screen.getByRole("button", {
        name: /previous-page/i,
      });

      userEvent.click(previousPageButton);

      expect(mockLoadCharacters).toBeCalled();
    });
  });
});
