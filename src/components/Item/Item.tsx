import { useState } from 'react';
import { ButtonTypes } from '../../interfaces/Interfaces';
import { IItemProps } from './Types';
import './Item.css';

export const Item = (props: IItemProps) => {
  const [selected, setSelected] = useState("item");

  const handleSelected = () => {
    selected === "item" ? setSelected("selectedItem") : setSelected("item");
    props.selectFunction({actionType: ButtonTypes.SELECTITEM, item: {id: props.id, name: props.name}});
  }

  return (
    <div className={selected} onClick={handleSelected}>{props.name}</div>
  )
}
