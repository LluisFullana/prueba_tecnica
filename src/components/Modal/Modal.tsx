import {
  ChangeEvent,
  DetailedHTMLProps,
  FormEvent,
  FormHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { ButtonTypes, IClickProps } from "../../interfaces/Interfaces";
import { Button } from "../Button/Button";
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
  }, [itemId]);

  const handleClick = (clickProps: IClickProps) => {
    actionFunction({
      actionType: clickProps.actionType,
      item: { id: itemId, name: inputValue },
    });
    if (clickProps.actionType === ButtonTypes.ADD) {
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
        />
        <div className="buttonsRow">
          <Button type={ButtonTypes.ADD} onClick={handleClick}>
            ADD
          </Button>
          <Button
            type={ButtonTypes.CLOSEMODAL}
            onClick={handleClick}
            submitType={"button"}
          >
            CANCEL
          </Button>
        </div>
      </form>
    </div>
  );
};
