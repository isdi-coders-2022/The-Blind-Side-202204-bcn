import { render, screen } from "@testing-library/react";
import CharacterDetailComponent from "./CharacterDetailComponent";

describe("Given a CharacterDetailComponent", () => {
  describe("When it is instantiated", () => {
    test("Then it should create five li elements", () => {});
    render(<CharacterDetailComponent />);

    const expectedNumOfLi = 5;

    const totalList = screen.getAllByRole("listitem");

    expect(totalList.length).toBe(expectedNumOfLi);
  });
});
