import { ReactNode } from "react";
import { ButtonAction } from "../../interfaces/Interfaces";

export interface IButtonProps {
  action: ButtonAction;
  onClick: Function;
  children: ReactNode;
  type?: JSX.IntrinsicElements["button"]["type"];
}
