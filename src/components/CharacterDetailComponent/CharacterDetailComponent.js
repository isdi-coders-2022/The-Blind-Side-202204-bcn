import { MdRefresh } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const CharacterDetailComponent = ({
  character: { name, status, species, gender, image },
}) => {
  return (
    <>
      <div>
        <img src={image} alt={name} />
        <div>
          <h2>{name}</h2>
          <ul>
            <li>Species: {species}</li>
            <li>Status: {status}</li>
            <li>Gender: {gender}</li>
          </ul>
          <div>
            <MdRefresh />
            <FaHeart />
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetailComponent;
