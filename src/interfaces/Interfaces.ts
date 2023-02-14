export interface IItem {
  id: number;
  name: string;
}

export interface IClickProps {
  actionType: ButtonTypes;
  item?: IItem;
}

export enum ButtonTypes {
  ADD = "addButton",
  DELETE = "deleteButton",
  RETURN = "returnButton",
  OPENMODAL = "openModalButton",
  CLOSEMODAL = "cancelButton",
  SELECTITEM = "selectedItem",
}

export enum ModalState {
  OPENED = "opened",
  CLOSED = "",
}
