import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import styled from "styled-components";

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
  return (
    <PagerComponentStyle>
      <div className="pager">
        <div className="icon-container">
          <BsCaretLeftFill />
        </div>
        <span>21-30</span>
        <div className="icon-container">
          <BsCaretRightFill />
        </div>
      </div>
    </PagerComponentStyle>
  );
};
export default PagerComponent;
