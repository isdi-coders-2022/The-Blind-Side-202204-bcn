import { FaHeart, FaInfo } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import useApi from "../../store/hooks/useApi";
import Button from "../Button/Button";
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
          <Button
            text={<IoClose />}
            nameClass={"icon-container icon-container--delete"}
            action={() => {
              deleteCharacter(id);
            }}
          />

          <Link to={`/detail/${id}`}>
            <Button
              text={<FaInfo />}
              nameClass={"icon-container icon-container--info"}
            />
          </Link>

          <Button
            text={<FaHeart />}
            nameClass={"icon-container icon-container--favourite"}
            action={(event) => {
              event.preventDefault();
              addCharacter(character);
            }}
          />
        </div>
      </div>
    </CharacterCard>
  );
};

export default CharacterComponent;
