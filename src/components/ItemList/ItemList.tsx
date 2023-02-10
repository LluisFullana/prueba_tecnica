import { Item } from '../Item/Item';
import { IItemListProps } from './Types';
import './ItemList.css';

export const ItemList = (props: IItemListProps) => {
  return (
    <div id='itemList'>
      {props.items.map(item => <Item key={item.id} id={item.id} itemName={item.name} selectFunction={props.selectFunction}/>)}
    </div>
  )
}
