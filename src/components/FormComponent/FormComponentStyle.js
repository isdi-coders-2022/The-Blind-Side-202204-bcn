import styled from "styled-components";

export const FormComponentyStyle = styled.div`
  .addCharacterForm-main {
    min-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #1e221b;
    margin-bottom: 120px;
    border-radius: 20px;
    margin-top: 70px;
    margin-left: 20px;
    margin-right: 20px;

    .addCharacterForm {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h2 {
      font-size: 25px;
      color: white;
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
      padding: 20px;
    }

    input {
      background-color: #000000;
      color: white;
      border-radius: 10%;
      font-size: 20px;
      margin: 20px;
      padding: 10px;
      box-sizing: border-box;
      border-style: none;
    }

    .form-submit {
      background-color: #20b640;
      height: 50px;
      width: 50px;
    }
  }
`;
