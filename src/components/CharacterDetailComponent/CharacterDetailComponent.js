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
          <div>
            <h2>{name}</h2>
            <ul>
              <li>Species: {species}</li>
              <li>Status: {status}</li>
              <li>Gender: {gender}</li>
            </ul>
            <div className="icon-container">
              <div className="character__icons">
                <MdRefresh className="icon-container icon-container--info" />
                <FaHeart className="icon-container icon-container--favourite" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CharacterDetailStyles>
  );
};

export default CharacterDetailComponent;
