import React, { Dispatch, SetStateAction } from "react";
import { MainFormStyled } from "../../AppStyled";
import { API_URL, TYPE_PIZZA, TYPE_SOUP } from "../../const";

interface MainFormProps {
  children: React.ReactNode;
  inputs: {
    name: string;
    preparation_time: string;
    type: string;
    no_of_slices: string;
    diameter: string;
    spiciness_scale: string;
    slices_of_bread: string;
  };
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIsError: Dispatch<SetStateAction<boolean>>;
}

export const MainForm = ({
  children,
  inputs,
  setIsLoading,
  setIsError,
}: MainFormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const checkType = () => {
      if (inputs.type === TYPE_PIZZA) {
        return {
          name: inputs.name,
          preparation_time: inputs.preparation_time,
          type: inputs.type,
          no_of_slices: inputs.no_of_slices,
          diameter: inputs.diameter,
        };
      } else if (inputs.type === TYPE_SOUP) {
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
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((response) => {
        if (!response.ok) {
          setIsError(true);
        } else {
          setIsLoading(false);
          setIsError(false);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  return <MainFormStyled onSubmit={handleSubmit}>{children}</MainFormStyled>;
};
