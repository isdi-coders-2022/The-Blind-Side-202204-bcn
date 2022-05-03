import { FaHeart, FaInfo } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const CharacterComponent = ({
  character: { name, status, species, image },
}) => {
  return (
    <div className="Character">
      <div className="icon-container icon-container--delete">
        <IoClose />
      </div>
      <div>
        <img
          className="Character__image"
          src={image}
          alt={`${name} from Rick and Morty Show`}
        ></img>
      </div>
      <h2>{name}</h2>
      <span>
        {species} | {status}
      </span>
      <div className="Character__icons">
        <div className="icon-containerr icon-container--info">
          <FaInfo />
        </div>
        <div className="icon-containerr icon-container--favourite">
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

export default CharacterComponent;