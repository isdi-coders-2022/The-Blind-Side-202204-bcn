import { RiHome2Fill } from "react-icons/ri";
import { BsFillHeartFill } from "react-icons/bs";
import { StyleHeader } from "./StyleHeaderComponent";
import { NavLink } from "react-router-dom";

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
              <NavLink to="/home">
                <RiHome2Fill title="Home" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites">
                <BsFillHeartFill title="Favourites" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </StyleHeader>
  );
};

export default HeaderComponent;
