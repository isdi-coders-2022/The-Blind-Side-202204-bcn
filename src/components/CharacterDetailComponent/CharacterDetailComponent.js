import { MdRefresh } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const CharacterDetailComponent = () => {
  return (
    <>
      <div>
        <img src="" alt="" />
        <div>
          <h2>Character Name</h2>
          <ul>
            <li>Species: Human</li>
            <li>Status: Alive</li>
            <li>Gender: Male</li>
            <li>Origin: Earth</li>
            <li>Total Episodes: 3</li>
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
