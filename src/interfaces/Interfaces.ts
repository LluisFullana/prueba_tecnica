export interface IItem {
  id: number;
  name: string;
}

export interface IClickProps {
  actionType: ButtonAction;
  item?: IItem;
}

export enum ButtonAction {
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
