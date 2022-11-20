import {State} from "./State";
import {isValueLengthOne, showMessageErrorOrInputText} from "../Util";
import {Constants} from "../Constants";
import {GlobalVariables} from "../global-variables.service";

export class DeleteState extends State{
  handleClickedButton(value: string, buttonText: string): string {
    if(isValueLengthOne(value)){
      return Constants.WAITING_MESSAGE_STATUS +'/' +this.handle2();
    }
    return showMessageErrorOrInputText(value, value.substring(0, value.length-1));
  }

  handle2(): string {
    return '->q0'
  }

}


