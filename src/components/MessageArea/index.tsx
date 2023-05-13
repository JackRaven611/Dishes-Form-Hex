import { MessageAreaStyled } from "../../AppStyled";

interface MessageAreaProps {
  isError: boolean;
  isLoading: boolean;
}

export const MessageArea = ({ isError, isLoading }: MessageAreaProps) => {
  const showMessage = () => {
    if (!isError && isLoading) return "Loading...";
    else if (isError) {
      return "Something went wrong, please try again";
    }
  };
  const message = showMessage();

  return <MessageAreaStyled isError={isError}>{message}</MessageAreaStyled>;
};
