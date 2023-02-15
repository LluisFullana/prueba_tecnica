import { useState } from "react";
import { Modal } from "./components/Modal/Modal";
import { Selector } from "./components/Selector/Selector";
import {
  ButtonAction,
  IClickProps,
  IItem,
  ModalState,
} from "./interfaces/Interfaces";
import "./App.css";
import { deleteItems } from "./ActionHelpers";

function App() {
  const initialState = [
    { id: 0, name: "Item 1" },
    { id: 1, name: "Item 2" },
    { id: 2, name: "Item 3" },
    { id: 3, name: "Item 4" },
  ];
  const [showModal, setShowModal] = useState(ModalState.CLOSED);
  const [selectedItems, setSelectedItems] = useState<IItem[]>([]);
  const [lastItemsState, setLastItemsState] = useState<IItem[][]>([
    initialState,
  ]);
  const [items, setItems] = useState<IItem[]>(initialState);

  const handleActions = ({
    actionType,
    item: item = { id: 0, name: "NA" },
  }: IClickProps) => {
    switch (actionType) {
      case ButtonAction.CLOSEMODAL:
        setShowModal(ModalState.CLOSED);
        break;

      case ButtonAction.OPENMODAL:
        setShowModal(ModalState.OPENED);
        break;

      case ButtonAction.ADD:
        if (item.name.trim() !== "") {
          setItems([...items, item]);
          setLastItemsState([...lastItemsState, items]);
          setShowModal(ModalState.CLOSED);
        }
        break;

      case ButtonAction.DELETE:
        var temporalItems = [...items];
        setLastItemsState([...lastItemsState, items]);
        setItems(deleteItems(temporalItems, selectedItems));
        setSelectedItems([]);
        break;

      case ButtonAction.RETURN:
        if (lastItemsState.length > 1) {
          let lastState = lastItemsState.pop();
          if (lastState) {
            setItems(lastState);
          }
        }
        break;

      case ButtonAction.SELECTITEM:
        let index = selectedItems.findIndex(
          (selectedItem) => selectedItem.id == item.id
        );
        if (index > -1) {
          let temporalSelectedItems = selectedItems;
          temporalSelectedItems.splice(index, 1);
          setSelectedItems(temporalSelectedItems);
        } else {
          setSelectedItems([...selectedItems, item]);
        }
        break;

      default:
        console.log("Default case action");
        break;
    }
  };

  return (
    <div className="App">
      <>
        <Modal actionFunction={handleActions} showModalState={showModal} />
        <div
          id="shadowId"
          className={showModal}
          onClick={() => handleActions({ actionType: ButtonAction.CLOSEMODAL })}
        ></div>
        <Selector items={items} actionFunction={handleActions} />
      </>
    </div>
  );
}

export default App;
