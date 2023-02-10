import { useState } from 'react'
import { Modal } from './components/Modal/Modal'
import { Selector } from './components/Selector/Selector'
import { ButtonTypes, IClickProps, IItem, ModalState } from './interfaces/Interfaces'
import './App.css'

function App() {
  const initialState = [{ id: 0, name: "Item 1" }, { id: 1, name: "Item 2" }, { id: 2, name: "Item 3" }, { id: 3, name: "Item 4" }];
  const [showModal, setShowModal] = useState(ModalState.CLOSED);
  
  const [selectedItems, setSelectedItems] = useState<IItem[]>([]);
  const [lastItemsState, setLastItemsState] = useState<IItem[][]>([initialState]);
  const [items, setItems] = useState<IItem[]>(initialState);

  const handleActions = ({ actionType, item: item = { id: 0, name: "NA" } }: IClickProps) => {
    switch (actionType) {

      case ButtonTypes.CLOSEMODAL:
        setShowModal(ModalState.CLOSED);
        break;

      case ButtonTypes.OPENMODAL:
        setShowModal(ModalState.OPENED);
        break;

      case ButtonTypes.ADD:
        setItems([...items, item]);
        setLastItemsState([...lastItemsState, items]);
        setShowModal(ModalState.CLOSED);
        break;

      case ButtonTypes.DELETE:
        var temporalItems = [...items]
        selectedItems.forEach(selectedItem => {
          let index = temporalItems.findIndex(temporalItem => temporalItem.id == selectedItem.id);
          temporalItems.splice(index, 1);
        });
        setLastItemsState([...lastItemsState, items])
        setItems(temporalItems);
        setSelectedItems([]);
        break;

      case ButtonTypes.RETURN:
        if (lastItemsState.length > 1) {
          let lastState = lastItemsState.pop();
          if (lastState != undefined) {
            setItems(lastState);
          }
        }
        break;

      case ButtonTypes.SELECTITEM:
        let index = selectedItems.findIndex(selectedItem => selectedItem.id == item.id);
        if (index === -1) {
          setSelectedItems([...selectedItems, item]);
        } else {
          var aux = [...selectedItems];
          aux.splice(index, 1);
          setSelectedItems(aux);
        }
        break;
    }
  }

  return (
    <div className="App">
      <>
        <Modal actionFunction={handleActions} showModalState={showModal} />
        <div id='shadowId' className={showModal}></div>
        <Selector items={items} actionFunction={handleActions} />
      </>
    </div>
  )
}

export default App
