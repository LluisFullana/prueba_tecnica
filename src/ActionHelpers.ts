import { IItem } from "./interfaces/Interfaces";

export const deleteItems = (items: IItem[], selectedItems: IItem[]) => {
  selectedItems.forEach((selectedItem) => {
    let index = items.findIndex((item) => item.id == selectedItem.id);
    items.splice(index, 1);
  });
  return items;
};
