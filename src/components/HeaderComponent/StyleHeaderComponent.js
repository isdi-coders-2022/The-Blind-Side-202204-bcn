import styled from "styled-components";

export const StyleHeader = styled.div`
  .header {
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 350px;

    .logo {
      width: 350px;
      height: 106px;
      padding: 50px 0;
    }

    &__nav {
      display: flex;
    }

    &__icon {
      display: flex;
      flex-direction: row;
      width: 350px;
      justify-content: space-between;
      padding: 0;

      svg {
        height: 50px;
        width: auto;
        color: #00b5cc;
      }
    }
  }
`;
