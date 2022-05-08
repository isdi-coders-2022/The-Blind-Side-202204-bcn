import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CharacterProvider from "./store/contexts/CharacterProvider";

jest.mock("./components/HeaderComponent/HeaderComponent", () => () => (
  <div>Mock Header Component</div>
));
jest.mock("./components/FooterComponent/FooterComponent", () => () => (
  <div>Mock Footer Component</div>
));
jest.mock("./pages/HomeComponent/HomeComponent", () => () => (
  <div>Mock Home Component</div>
));

describe("Given a AppComponent", () => {
  describe("When the App is instasntiated", () => {
    test("It should render a navigate component and a footer component", () => {
      const textNav = "Mock Header Component";
      const textFooter = "Mock Footer Component";
      const textHomeCompoenent = "Mock Home Component";

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const expectedTextNav = screen.getByText(textNav);
      const expectedTexFooter = screen.getByText(textFooter);
      const expepectedTextHome = screen.getByText(textHomeCompoenent);

      expect(expectedTextNav).toBeInTheDocument();
      expect(expectedTexFooter).toBeInTheDocument();
      expect(expepectedTextHome).toBeInTheDocument();
    });
  });
});
