import styledComponents from "styled-components";

const StyleTeamName = styledComponents.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: red;
  height: 200px;
`;

const FooterComponent = () => {
  return (
    <StyleTeamName>
      <div className="footer">
        <span className="footer__text">THE BLIND SIDE PROJECT</span>
      </div>
    </StyleTeamName>
  );
};

export default FooterComponent;
