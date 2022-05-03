import { render, screen } from "@testing-library/react";
import HomeComponent from "./HomeComponent";

describe("Given a HomeComponent", () => {
  describe("When it is instantiated", () => {
    test("Then it should render the logo from the Header Compoment", () => {
      const logoAlt = "rick and morty logo";

      render(<HomeComponent />);
      const logo = screen.getByAltText(logoAlt);

      expect(logo).toBeInTheDocument();
    });
  });
});
