import styled from "styled-components";

export const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  font-family: "Roboto", sans-serif;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
`;

export const MainFormStyled = styled.form`
  padding: 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  border: solid 0.3rem #41644a;
  background-color: #f7f1e5;
  color: #263a29;
`;

export const FormFieldsList = styled.ul`
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
      border-radius: 0.5rem;
      border: solid 0.3rem #263a29;
      color: #263a29;
      font-size: 3.5rem;

      &:focus {
        outline: none;
        border: solid 0.3rem #e86a33;
      }
    }

    select {
      margin-bottom: 2vh;
      border-radius: 0.5rem;
      border: solid 0.3rem #263a29;
      color: #263a29;
      font-size: 3.5rem;

      &:focus {
        outline: none;
        border: solid 0.3rem #e86a33;
      }
    }
  }
`;

export const SubmitButton = styled.button`
  width: 60%;
  padding: 1rem 0;
  margin-top: 4vh;
  font-size: 3.5rem;
  color: #fff;
  border-radius: 0.5rem;
  background-color: #41644a;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #e86a33;
  }
`;

export const MessageAreaStyled = styled.p<{ isError: boolean }>`
  font-size: 1.5rem;
  font-weight: 500;
  height: 1vh;
  margin: 2vh 0 0;
  color: ${(props) => (props.isError ? "red" : "#263a29")};
`;
