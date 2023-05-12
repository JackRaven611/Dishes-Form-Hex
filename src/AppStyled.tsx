import styled from "styled-components";

export const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  font-family: "Roboto", sans-serif;
  justify-content: center;
  align-items: center;
  font-size: 35px;

  form {
    padding: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    border: solid 3px #41644a;
    background-color: #f7f1e5;
    color: #263a29;

    button {
      width: 60%;
      padding: 10px 0;
      margin-top: 4vh;
      font-size: 35px;
      color: #fff;
      border-radius: 5px;
      background-color: #41644a;
      border: none;
      cursor: pointer;
      transition: 0.2s;
    }

    button:hover {
      background-color: #e86a33;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 80%;

        label {
          margin-bottom: 0.5vh;
        }

        input {
          margin-bottom: 2vh;
          border-radius: 5px;
          border: solid 3px #263a29;
          color: #263a29;
          font-size: 35px;
        }

        input:focus {
          outline: none;
          border: solid 3px #e86a33;
        }

        select {
          margin-bottom: 2vh;
          border-radius: 5px;
          border: solid 3px #263a29;
          color: #263a29;
          font-size: 35px;
        }

        select:focus {
          outline: none;
          border: solid 3px #e86a33;
        }
      }
    }
  }
`;

export const MessageArea = styled.p`
  font-size: 15px;
  height: 1vh;
  margin: 2vh 0 0;
  color: red;
`;
