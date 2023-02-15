import { ReactNode } from "react";
import { ButtonTypes } from "../../interfaces/Interfaces";

export interface IButtonProps {
  type: ButtonTypes;
  onClick: Function;
  children: ReactNode;
  submitType?: "submit" | "button" | "reset" | undefined;
}
