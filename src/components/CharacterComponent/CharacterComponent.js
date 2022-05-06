import { FaHeart, FaInfo } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import useApi from "../../store/hooks/useApi";
import { CharacterCard } from "./CharacterComponentStyle";

const CharacterComponent = ({ character }) => {
  const { id, name, status, species, image } = character;
  const { deleteCharacter, addCharacter } = useApi();

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
          <div
            className="icon-container icon-container--delete"
            onClick={() => {
              deleteCharacter(id);
            }}
          >
            <IoClose />
          </div>
          <Link
            to={`/detail/${id}`}
            className="icon-container icon-container--info"
          >
            <FaInfo />
          </Link>
          <div
            className="icon-container icon-container--favourite"
            onClick={(event) => {
              event.preventDefault();
              addCharacter(character);
            }}
          >
            <FaHeart />
          </div>
        </div>
      </div>
    </CharacterCard>
  );
};

export default CharacterComponent;
