import { ButtonTypes, IClickProps } from '../../interfaces/Interfaces';
import { Button } from '../Buttons/Button';
import { ItemList } from '../ItemList/ItemList';
import { ReturnSvg } from './ReturnSvg';
import { ISelectorProps } from './Types';
import './Selector.css';

export const Selector = (props: ISelectorProps) => {

  const handleActions = ({actionType, item = {id: 0, name: "NA"}}: IClickProps) => {
    props.actionFunction({actionType: actionType, item: item});
  }

  return (
    <div className='selector'>
        <div className='title'>This is a technical proof</div>
        <div className='loremIpsum'> 
          Lorem ipsum dolor sit amet consectetur adipiscing, 
          elit mus primis nec inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc, 
          hendrerit posuere augue fames dictumst placerat porttitor, dis mi pharetra vestibulum venenatis phasellus.
        </div>
        <ItemList items={props.items} selectFunction={handleActions} />
        <div className='buttonsRow'>
          <Button type={ButtonTypes.RETURN} onClick={handleActions}> <ReturnSvg/> </Button>
          <Button type={ButtonTypes.DELETE} onClick={handleActions}> DELETE </Button>
          <Button type={ButtonTypes.OPENMODAL} onClick={handleActions}> ADD </Button>
        </div>
    </div>
  )
}
