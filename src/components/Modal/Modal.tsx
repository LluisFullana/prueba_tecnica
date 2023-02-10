import { ChangeEvent, useState } from 'react';
import { ButtonTypes, IClickProps } from '../../interfaces/Interfaces';
import { Button } from '../Button/Button';
import { IModalProps } from './Types';
import './Modal.css';

export const Modal = ({ actionFunction, showModalState }: IModalProps) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleClick = (clickProps: IClickProps) => {
        actionFunction({ actionType: clickProps.actionType, item: { id: 0, name: inputValue } });
        if (clickProps.actionType === ButtonTypes.ADD) {
            setInputValue("");
        }
    }

    return (
        <div id='modal' className={showModalState}>
            <div className='label'>Add item to list</div>
            <input className='textInput' type="text" placeholder='Type the text here...' value={inputValue} onChange={handleChange} />
            <div className='buttonsRow'>
                <Button type={ButtonTypes.ADD} onClick={handleClick}> ADD </Button>
                <Button type={ButtonTypes.CLOSEMODAL} onClick={handleClick}> CANCEL </Button>
            </div>
        </div>
    )
}
