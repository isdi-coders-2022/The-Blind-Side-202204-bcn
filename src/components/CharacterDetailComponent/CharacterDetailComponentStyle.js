import styled from "styled-components";

export const CharacterDetailStyles = styled.div`
  .main-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .character {
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1e221b;
    margin-bottom: 120px;
    border-radius: 20px;
    margin-top: 70px;
    padding-top: 30px;

    h2 {
      text-transform: uppercase;
      font-size: 1.8rem;
      padding-top: 20px;
      text-align: center;

      color: #b2df28;
    }
    &__image-container {
      width: 300px;
      height: 300px;
      margin-top: -70px;
    }

    &__image {
      border-radius: 50%;
      object-fit: cover;
    }

    &__text {
      color: white;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: none;
    }

    &__text--title {
      color: #b2df28;
      margin-right: -40px;
    }
    ul {
      list-style-type: none;
      margin: 0px 0px 20px 0px;
      padding: 0px 0px 20px 0px;
    }

    li {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding: none;
      margin: none;
    }

    &__icons {
      display: flex;
      flex-direction: row;
      width: 300px;
      justify-content: space-between;
      padding-bottom: 30px;

      .icon-container {
        display: flex;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        border: none;
        &--info {
          background-color: #00b5cc;
        }
        &--favourite {
          background-color: #20b640;
        }
        svg {
          fill: #fff;
          width: 38px;
          height: 38px;
        }
      }
    }
  }
`;
