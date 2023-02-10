import { IItem } from "../../interfaces/Interfaces";

export interface IItemListProps {
  items: IItem[],
  selectFunction: Function
}