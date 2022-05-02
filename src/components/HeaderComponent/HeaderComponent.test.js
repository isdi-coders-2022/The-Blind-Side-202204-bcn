const { render, screen } = require("@testing-library/react");
const { default: HeaderComponent } = require("./HeaderComponent");

describe("Given a HeaderComponent Component", () => {
  describe("When it's call)", () => {
    test("Then it should render a HeaderComponent with 2 li item", () => {
      render(<HeaderComponent />);

      const expectedNumOfLi = 2;

      const totalList = screen.getAllByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfLi);
    });
  });
});
