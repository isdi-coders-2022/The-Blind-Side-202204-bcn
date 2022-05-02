import { RiHome2Fill } from "react-icons/ri";
import { BsFillHeartFill } from "react-icons/bs";

const HeaderComponent = () => {
  return (
    <>
      <img src="images/rick-and-morty-logo.png" alt="rick and morty logo" />
      <ul>
        <li>
          <a href="Fav">
            <RiHome2Fill />
          </a>
        </li>
        <li>
          <a href="Home">
            <BsFillHeartFill />
          </a>
        </li>
      </ul>
    </>
  );
};

export default HeaderComponent;
