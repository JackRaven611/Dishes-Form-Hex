import { useState } from "react";
import { TypeFields } from "./components/typeFields/typeFields";
import { AppStyled, MessageArea } from "./AppStyled";

function App() {
  const [isError, setIsError] = useState(false);
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const checkType = () => {
      if (inputs.type === "pizza") {
        return {
          name: inputs.name,
          preparation_time: inputs.preparation_time,
          type: inputs.type,
          no_of_slices: inputs.no_of_slices,
          diameter: inputs.diameter,
        };
      } else if (inputs.type === "soup") {
        return {
          name: inputs.name,
          preparation_time: inputs.preparation_time,
          type: inputs.type,
          spiciness_scale: inputs.spiciness_scale,
        };
      } else {
        return {
          name: inputs.name,
          preparation_time: inputs.preparation_time,
          type: inputs.type,
          slices_of_bread: inputs.slices_of_bread,
        };
      }
    };

    const data = checkType();

    try {
      fetch("https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((response) => {
        if (!response.ok) {
          setIsError(true);
        } else {
          setIsError(false);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppStyled>
      <form onSubmit={handleSubmit}>
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
        <MessageArea>
          {isError ? "Something went wrong, please try again" : null}
        </MessageArea>
        <button type="submit">Submit</button>
      </form>
    </AppStyled>
  );
}

export default App;
