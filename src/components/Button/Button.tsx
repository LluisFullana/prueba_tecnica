import { IButtonProps } from "./Types";
import "./Button.css";

export const Button = ({
  type,
  onClick,
  children,
  submitType = "submit",
}: IButtonProps) => {
  return (
    <button
      type={submitType}
      className={type}
      onClick={() => onClick({ actionType: type })}
    >
      {children}
    </button>
  );
};
