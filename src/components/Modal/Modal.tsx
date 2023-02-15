import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ButtonAction, IClickProps } from "../../interfaces/Interfaces";
import { Button } from "../Buttons/Button";
import { IModalProps } from "./Types";
import "./Modal.css";

export const Modal = ({ actionFunction, showModalState }: IModalProps) => {
  const [inputValue, setInputValue] = useState("");
  const [itemId, setItemId] = useState(10);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setInputValue("");
  }, [itemId, showModalState]);

  const handleClick = (clickProps: IClickProps) => {
    actionFunction({
      actionType: clickProps.actionType,
      item: { id: itemId, name: inputValue },
    });
    if (clickProps.actionType === ButtonAction.ADD) {
      setItemId(itemId + 1);
    }
  };

  return (
    <div id="modal" className={showModalState}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-input-id" className="label">
          Add item to list
        </label>
        <input
          id="text-input-id"
          className="textInput"
          type="text"
          placeholder="Type the text here..."
          value={inputValue}
          onChange={handleChange}
          required
          minLength={1}
          autoComplete="off"
        />
        <div className="buttonsRow">
          <Button type="submit" action={ButtonAction.ADD} onClick={handleClick}>
            ADD
          </Button>
          <Button action={ButtonAction.CLOSEMODAL} onClick={handleClick}>
            CANCEL
          </Button>
        </div>
      </form>
    </div>
  );
};
