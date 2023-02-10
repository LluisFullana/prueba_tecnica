export interface IItemProps {
  id: number,
  itemName: string,
  selectFunction: Function
}

export enum SelectedItem {
  SELECTED = "selectedItem",
  UNSELECTED = "item"
}
  