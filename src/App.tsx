import { useState } from "react";
import { TypeFields } from "./components/typeFields/typeFields";
import { AppStyled } from "./AppStyled";

function App() {
  const [inputs, setInputs] = useState({
    name: "",
    preparation_time: "",
    type: "pizza",
    no_of_slices: "",
    diameter: "",
    spiciness: "",
    slices_of_bread: "",
  });

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputs({
      ...inputs,
      type: event.target.value,
      no_of_slices: "",
      diameter: "",
      spiciness: "",
      slices_of_bread: "",
    });
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, name: event.target.value });
  };
  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, preparation_time: event.target.value });
  };

  return (
    <AppStyled>
      <form action="">
        <ul>
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
        </ul>

        <button
          type="button"
          onClick={() => {
            console.log(inputs);
          }}
        >
          Submit
        </button>
      </form>
    </AppStyled>
  );
}

export default App;
