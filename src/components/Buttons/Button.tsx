import { ButtonTypes } from '../../interfaces/Interfaces';
import { IButtonProps } from './Types';
import './Button.css';

export const Button = (props: IButtonProps) => {

    const setStyles = (buttonType: ButtonTypes) => {
        switch(buttonType){
            case ButtonTypes.OPENMODAL:
                return "openModalButton";
            case ButtonTypes.DELETE:
                return "deleteButton";
            case ButtonTypes.RETURN:
                return "returnButton";
            case ButtonTypes.ADD:
                return "addButton";
            case ButtonTypes.CLOSEMODAL:
                return "cancelButton";
        }
    }
    
    return (
        <button className={setStyles(props.type)} onClick={() => props.onClick({actionType: props.type})}>
            {props.children}
        </button>
    )
}