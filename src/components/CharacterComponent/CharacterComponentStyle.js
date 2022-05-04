import styled from "styled-components";

export const CharacterCard = styled.div`
  .character {
    min-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1e221b;
    margin-bottom: 120px;
    border-radius: 20px;
    margin-top: 70px;
    h2 {
      text-transform: uppercase;
      font-size: 1.8rem;
      padding-top: 20px;
      color: #b2df28;
    }
    span {
      color: #fff;
      font-size: 1.2rem;
      padding-bottom: 20px;
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
        &--info {
          background-color: #00b5cc;
        }
        &--favourite {
          background-color: #20b640;
        }
        &--delete {
          z-index: 2;
          position: absolute;
          background-color: #f46036;
          transform: translateY(-452px) translateX(230px);
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
