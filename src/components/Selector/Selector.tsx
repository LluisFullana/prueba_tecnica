import { ButtonAction } from "../../interfaces/Interfaces";
import { Button } from "../Buttons/Button";
import { ItemList } from "../ItemList/ItemList";
import { ReturnIcon } from "./ReturnIcon";
import { ISelectorProps } from "./Types";
import "./Selector.css";

export const Selector = ({ items, actionFunction }: ISelectorProps) => {
  return (
    <div className="selector">
      <div className="title">This is a technical proof</div>
      <div className="loremIpsum">
        Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec
        inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc,
        hendrerit posuere augue fames dictumst placerat porttitor, dis mi
        pharetra vestibulum venenatis phasellus.
      </div>
      <ItemList items={items} selectFunction={actionFunction} />
      <div className="buttonsRow">
        <Button action={ButtonAction.RETURN} onClick={actionFunction}>
          <ReturnIcon />
        </Button>
        <Button action={ButtonAction.DELETE} onClick={actionFunction}>
          DELETE
        </Button>
        <Button action={ButtonAction.OPENMODAL} onClick={actionFunction}>
          ADD
        </Button>
      </div>
    </div>
  );
};
