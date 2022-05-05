import { useContext } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import styled from "styled-components";
import CharacterContext from "../../store/contexts/CharacterContext";
import useApi from "../../store/hooks/useApi";

const PagerComponentStyle = styled.div`
  .pager {
    background-color: #b2df28;
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    svg {
      width: 70px;
      height: 70px;
    }

    span {
      font-size: 24px;
    }
  }
`;

const PagerComponent = () => {
  const { state } = useContext(CharacterContext);
  const { loadCharacters } = useApi();

  return (
    <PagerComponentStyle>
      <div className="pager">
        <div
          className="icon-container"
          onClick={() => {
            loadCharacters(state.info.prev);
          }}
        >
          <BsCaretLeftFill />
        </div>
        <span>21-30</span>
        <div
          className="icon-container"
          onClick={() => {
            loadCharacters(state.info.next);
          }}
        >
          <BsCaretRightFill />
        </div>
      </div>
    </PagerComponentStyle>
  );
};
export default PagerComponent;
