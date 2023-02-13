import { ReactNode } from "react";

export interface IItemProps {
  id: number,
  selectFunction: Function,
  children: ReactNode
}

export enum SelectedItem {
  SELECTED = "selectedItem",
  UNSELECTED = "item"
}
