import { useContext } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import styled from "styled-components";
import CharacterContext from "../../store/contexts/CharacterContext";
import useApi from "../../store/hooks/useApi";
import Button from "../Button/Button";

const PagerComponentStyle = styled.div`
  .pager {
    background-color: #b2df28;
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .icon-container {
      background: none;
      border: none;
      :active {
        color: #fff;
      }
    }

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
        <Button
          nameClass={"icon-container"}
          text={<BsCaretLeftFill />}
          action={() => {
            loadCharacters(state.info.prev);
          }}
        />
        <span>21-30</span>

        <Button
          nameClass={"icon-container"}
          text={<BsCaretRightFill />}
          action={() => {
            loadCharacters(state.info.next);
          }}
        />
      </div>
    </PagerComponentStyle>
  );
};
export default PagerComponent;
