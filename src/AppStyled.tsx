import styled from "styled-components";

export const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;

  form {
    padding: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border: solid 1px #6c969d;
    background-color: #99d5c9;
    color: #2c3d55;

    button {
      width: 100%;
      margin-top: 35px;
      font-size: 35px;
      color: #fff;
      border-radius: 5px;
      background-color: #6c969d;
      border: solid 1px #2c3d55;
      cursor: pointer;
      transition: 0.2s;
    }

    button:hover {
      background-color: #f6511d;
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
        width: 100%;

        input {
          margin-bottom: 2vh;
          border-radius: 5px;
          border: solid 1px #2c3d55;
          color: #2c3d55;
          font-size: 35px;
        }

        input:focus {
          outline: none;
          border: solid 1px #f6511d;
        }

        select {
          margin-bottom: 2vh;
          border-radius: 5px;
          border: solid 1px #2c3d55;
          color: #2c3d55;
          font-size: 35px;
        }

        select:focus {
          outline: none;
          border: solid 1px #f6511d;
        }
      }
    }
  }
`;
