import { Item } from '../Item/Item';
import { IItemListProps } from './Types';
import './ItemList.css';

export const ItemList = ({ items, selectFunction }: IItemListProps) => {
  return (
    <div id='itemList'>
      {items.map(item => <Item key={item.id} id={item.id} itemName={item.name} selectFunction={selectFunction} />)}
    </div>
  )
}
