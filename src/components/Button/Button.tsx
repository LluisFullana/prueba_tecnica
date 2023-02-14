import { IButtonProps } from "./Types";
import "./Button.css";

export const Button = ({ type, onClick, children }: IButtonProps) => {
  return (
    <button className={type} onClick={() => onClick({ actionType: type })}>
      {children}
    </button>
  );
};
