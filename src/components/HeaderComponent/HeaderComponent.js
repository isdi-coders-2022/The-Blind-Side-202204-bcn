import { RiHome2Fill } from "react-icons/ri";
import { BsFillHeartFill } from "react-icons/bs";
import { StyleHeader } from "./StyleHeaderComponent";

const HeaderComponent = () => {
  return (
    <StyleHeader>
      <div className="header">
        <div className="header__logoContainer">
          <img
            className="logo"
            src="images/Rick-Morty-logo.png"
            alt="rick and morty logo"
          />
        </div>
        <nav className="header__nav">
          <ul className="header__icon">
            <li>
              <a href="Fav">
                <RiHome2Fill />
              </a>
            </li>
            <li>
              <a href="/">
                <BsFillHeartFill />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </StyleHeader>
  );
};

export default HeaderComponent;
