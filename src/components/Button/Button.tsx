import { IButtonProps } from './Types';
import './Button.css';

export const Button = (props: IButtonProps) => {
    return (
        <button className={props.type} onClick={() => props.onClick({actionType: props.type})}>
            {props.children}
        </button>
    )
}