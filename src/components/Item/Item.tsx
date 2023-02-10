import { useState } from 'react';
import { ButtonTypes } from '../../interfaces/Interfaces';
import { IItemProps, SelectedItem } from './Types';
import './Item.css';

export const Item = (props: IItemProps) => {
  const [selected, setSelected] = useState(SelectedItem.UNSELECTED);

  const handleSelected = () => {
    selected === SelectedItem.UNSELECTED ? setSelected(SelectedItem.SELECTED) : setSelected(SelectedItem.UNSELECTED);
    props.selectFunction({ actionType: ButtonTypes.SELECTITEM, item: { id: props.id, name: props.itemName } });
  }

  return (
    <div className={selected} onClick={handleSelected}>{props.itemName}</div>
  )
}
