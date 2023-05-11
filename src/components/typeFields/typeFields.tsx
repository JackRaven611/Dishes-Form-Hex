import React, { Dispatch, SetStateAction } from "react";

interface TypeFieldsProps {
  inputs: {
    name: string;
    preparation_time: string;
    type: string;
    no_of_slices: string;
    diameter: string;
    spiciness: string;
    slices_of_bread: string;
  };
  setInputs: Dispatch<
    SetStateAction<{
      name: string;
      preparation_time: string;
      type: string;
      no_of_slices: string;
      diameter: string;
      spiciness: string;
      slices_of_bread: string;
    }>
  >;
}

export const TypeFields = ({ inputs, setInputs }: TypeFieldsProps) => {
  const handleSlicesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, no_of_slices: event.target.value });
  };
  const handleDiameterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, diameter: event.target.value });
  };
  const handleSpicinessChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputs({ ...inputs, spiciness: event.target.value });
  };
  const handleBreadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, slices_of_bread: event.target.value });
  };

  if (inputs.type === "pizza") {
    return (
      <>
        <label htmlFor="slices">Number of Slices</label>
        <input
          id="slices"
          type="number"
          min={1}
          max={35}
          placeholder="Number of Slices"
          onChange={handleSlicesChange}
          required
        />

        <label htmlFor="diameter">Diameter</label>
        <input
          id="diameter"
          type="number"
          step="0.1"
          min={10}
          max={50}
          placeholder="Diameter"
          onChange={handleDiameterChange}
          required
        />
      </>
    );
  } else if (inputs.type === "soup") {
    return (
      <>
        <label htmlFor="spiciness">Spiciness</label>
        <input
          id="spiciness"
          type="number"
          min={1}
          max={10}
          placeholder="Spiciness scale"
          onChange={handleSpicinessChange}
          required
        />
      </>
    );
  } else {
    return (
      <>
        <label htmlFor="bread">Slices of Bread</label>
        <input
          id="bread"
          type="number"
          min={1}
          max={10}
          placeholder="Slices of Bread"
          onChange={handleBreadChange}
          required
        />
      </>
    );
  }
};
