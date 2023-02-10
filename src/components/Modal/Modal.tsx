import { ChangeEvent, useState } from 'react';
import { ButtonTypes, IClickProps } from '../../interfaces/Interfaces';
import { Button } from '../Buttons/Button';
import { IModalProps } from './Types';
import './Modal.css';

export const Modal = (props: IModalProps) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleClick = (clickProps: IClickProps) => {
        props.actionFunction({actionType: clickProps.actionType, item: {id: 0, name: inputValue}});
    }

  return (
    <div className='modal'>
        <div className='label'>Add item to list</div>
            <input className='textInput' type="text" placeholder='Type the text here...' onChange={handleChange}/>
        <div className='buttonsRow'>
            <Button type={ButtonTypes.ADD} onClick={handleClick}> ADD </Button>
            <Button type={ButtonTypes.CLOSEMODAL} onClick={handleClick}> CANCEL </Button>
        </div>
    </div>
  )
}
