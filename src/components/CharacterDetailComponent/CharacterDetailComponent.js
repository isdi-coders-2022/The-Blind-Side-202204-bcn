import { MdRefresh } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { CharacterDetailStyles } from "./CharacterDetailComponentStyle";

const CharacterDetailComponent = ({ character }) => {
  const { name, status, species, image, gender } = character;
  return (
    <CharacterDetailStyles>
      <div className="main-container">
        <div className="character">
          <div className="character__image-container">
            <img className="character__image" src={image} alt={name} />
          </div>
          <div className="character__text">
            <h2>{name}</h2>
            <ul>
              <li>
                <div className="character__text--title">Species: </div>
                <div className="character__text--detail">{species}</div>
              </li>
              <li>
                <div className="character__text--title">Status: </div>{" "}
                <div className="character__text--detail">{status}</div>
              </li>
              <li>
                <div className="character__text--title">Gender: </div>{" "}
                <div className="character__text--detail">{gender}</div>
              </li>
            </ul>
            <div className="character__icons">
              <button className="icon-container icon-container--info">
                <MdRefresh />
              </button>
              <button className="icon-container icon-container--favourite">
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </CharacterDetailStyles>
  );
};

export default CharacterDetailComponent;
