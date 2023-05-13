import { useState } from "react";
import { MainForm } from "./components/Form";
import { AppStyled, FormFieldsList, SubmitButton } from "./AppStyled";
import { TypeFields } from "./components/TypeFields";
import { MessageArea } from "./components/MessageArea";

function App() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    preparation_time: "",
    type: "pizza",
    no_of_slices: "",
    diameter: "",
    spiciness_scale: "",
    slices_of_bread: "",
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, name: event.target.value });
  };
  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, preparation_time: event.target.value });
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputs({
      ...inputs,
      type: event.target.value,
      no_of_slices: "",
      diameter: "",
      spiciness_scale: "",
      slices_of_bread: "",
    });
  };
  return (
    <AppStyled>
      <MainForm
        inputs={inputs}
        setIsLoading={setIsLoading}
        setIsError={setIsError}
      >
        <FormFieldsList>
          <li>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              maxLength={35}
              onChange={handleNameChange}
              required
            />
          </li>
          <li>
            <label htmlFor="prepTime">Preparation Time</label>
            <input
              id="prepTime"
              type="time"
              step={1}
              onChange={handleTimeChange}
              required
            />
          </li>
          <li>
            <label htmlFor="dishType">Type of Dish</label>
            <select
              id="dishType"
              value={inputs.type}
              onChange={handleTypeChange}
            >
              <option value="pizza">Pizza</option>

              <option value="soup">Soup</option>

              <option value="sandwich">Sandwich</option>
            </select>
          </li>
          <li>
            <TypeFields inputs={inputs} setInputs={setInputs} />
          </li>
        </FormFieldsList>
        <MessageArea isError={isError} isLoading={isLoading} />
        <SubmitButton type="submit">Submit</SubmitButton>
      </MainForm>
    </AppStyled>
  );
}

export default App;
