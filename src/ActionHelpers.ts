import { IItem } from "./interfaces/Interfaces";

export const deleteItems = (items: IItem[], selectedItems: IItem[]) => {
  selectedItems.forEach((selectedItem) => {
    let index = items.findIndex((item) => item.id == selectedItem.id);
    items.splice(index, 1);
  });
  return items;
};

export const selectItemHelper = (selectedItems: IItem[], item: IItem) => {
  let index = selectedItems.findIndex(
    (selectedItem) => selectedItem.id == item.id
  );
  if (index !== -1) {
    return selectedItems.splice(index, 1);
  } else {
    return null;
  }
};
