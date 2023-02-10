import { ButtonTypes, IClickProps } from '../../interfaces/Interfaces';
import { Button } from '../Button/Button';
import { ItemList } from '../ItemList/ItemList';
import { ReturnSvg } from './ReturnSvg';
import { ISelectorProps } from './Types';
import './Selector.css';

export const Selector = ({items, actionFunction}: ISelectorProps) => {
  return (
    <div className='selector'>
      <div className='title'>This is a technical proof</div>
      <div className='loremIpsum'>
        Lorem ipsum dolor sit amet consectetur adipiscing,
        elit mus primis nec inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc,
        hendrerit posuere augue fames dictumst placerat porttitor, dis mi pharetra vestibulum venenatis phasellus.
      </div>
      <ItemList items={items} selectFunction={actionFunction} />
      <div className='buttonsRow'>
        <Button type={ButtonTypes.RETURN} onClick={actionFunction}> <ReturnSvg /> </Button>
        <Button type={ButtonTypes.DELETE} onClick={actionFunction}> DELETE </Button>
        <Button type={ButtonTypes.OPENMODAL} onClick={actionFunction}> ADD </Button>
      </div>
    </div>
  )
}
