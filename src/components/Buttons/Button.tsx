import { IButtonProps } from "./Types";
import "./Button.css";

export const Button = ({
  action,
  onClick,
  children,
  type = "button",
}: IButtonProps) => {
  return (
    <button
      type={type}
      className={action}
      onClick={() => onClick({ actionType: action })}
    >
      {children}
    </button>
  );
};
