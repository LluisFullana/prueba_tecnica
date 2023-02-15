import { useState } from "react";
import { ButtonAction } from "../../interfaces/Interfaces";
import { IItemProps, SelectedItem } from "./Types";
import "./Item.css";

export const Item = (props: IItemProps) => {
  const [selected, setSelected] = useState(SelectedItem.UNSELECTED);

  const handleSelected = () => {
    selected === SelectedItem.UNSELECTED
      ? setSelected(SelectedItem.SELECTED)
      : setSelected(SelectedItem.UNSELECTED);
    props.selectFunction({
      actionType: ButtonAction.SELECTITEM,
      item: { id: props.id, name: props.children },
    });
  };

  return (
    <div className={selected} onClick={handleSelected}>
      {props.children}
    </div>
  );
};
