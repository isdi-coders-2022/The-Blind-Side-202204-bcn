import { FaHeart, FaInfo } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { CharacterCard } from "./CharacterComponentStyle";

const CharacterComponent = ({
  character: { name, status, species, image },
}) => {
  const navigate = useNavigate();

  return (
    <CharacterCard>
      <div className="character">
        <div className="character__image-container">
          <img
            className="character__image"
            src={image}
            alt={`${name} from Rick and Morty Show`}
          ></img>
        </div>
        <h2>{name}</h2>
        <span>
          {species} | {status}
        </span>
        <div className="character__icons">
          <div className="icon-container icon-container--delete">
            <IoClose />
          </div>
          <Link to="/detail" className="icon-container icon-container--info">
            <FaInfo />
          </Link>
          <div className="icon-container icon-container--favourite">
            <FaHeart />
          </div>
        </div>
      </div>
    </CharacterCard>
  );
};

export default CharacterComponent;
