import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterProvider from "../../store/contexts/CharacterProvider";
import HeaderComponent from "./HeaderComponent";

describe("Given a HeaderComponent Component", () => {
  describe("When it's call", () => {
    test("Then it should render a HeaderComponent with 2 li item", () => {
      render(
        <BrowserRouter>
          <CharacterProvider>
            <HeaderComponent />
          </CharacterProvider>
        </BrowserRouter>
      );

      const expectedNumOfLi = 2;

      const totalList = screen.getAllByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfLi);
    });
  });
});
