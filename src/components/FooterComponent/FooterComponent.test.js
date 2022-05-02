import { render, screen } from "@testing-library/react";
import Footer from "./FooterComponent";

describe("Given FooterComponent", () => {
  describe("When its called", () => {
    test("Then it should render a componentent with the text 'THE BLIND SIDE PROJECT'", () => {
      const expectedText = "THE BLIND SIDE PROJECT";

      render(<Footer />);

      const expectedElement = screen.getByText(expectedText);

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
