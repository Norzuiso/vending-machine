import {State} from "./State";
import {isValueLengthOne, showMessageErrorOrInputText} from "../Util";
import {Constants} from "../Constants";
import {GlobalVariables} from "../global-variables.service";

export class DeleteState extends State{
  //Esta clase se encarga de borrar
  handleClickedButton(value: string, buttonText: string): string {
    if(isValueLengthOne(value)){
      return Constants.WAITING_MESSAGE_STATUS +'/' +this.returnInitialState();
    }
    return showMessageErrorOrInputText(value, value.substring(0, value.length-1));
  }

  returnInitialState(): string {
    return '->q0'
  }

}


