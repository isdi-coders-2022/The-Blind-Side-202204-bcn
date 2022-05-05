import DetailComponent from "./DetailComponent";
import { render, screen } from "@testing-library/react";
import CharacterProvider from "../../store/contexts/CharacterProvider";

describe("Given a component DetailComponent", () => {
  describe("When it is instanted", () => {
    test("Then it should render a list of li", () => {
      render(
        <CharacterProvider>
          <DetailComponent />
        </CharacterProvider>
      );
      const expectedNumOfLi = 5;

      const totalList = screen.getAllByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfLi);
    });
  });
});
