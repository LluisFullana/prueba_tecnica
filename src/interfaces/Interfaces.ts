export interface IItem {
    id: number,
    name: string
}

export interface IClickProps {
    actionType: ButtonTypes,
    item?: IItem
}

export enum ButtonTypes {
    ADD,
    DELETE,
    RETURN,
    OPENMODAL,
    CLOSEMODAL,
    SELECTITEM
}

export enum ModalState {
    OPENED = "opened",
    CLOSED = ""
}
