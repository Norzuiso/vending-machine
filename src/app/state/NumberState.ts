import {State} from "./State";
import {Constants} from "../Constants";
import {showMessageErrorOrInputText} from "../Util";

export class NumberState extends State {
  handleClickedButton(value: string, buttonText: string): string {
    if (value == Constants.WAITING_MESSAGE_STATUS) {
      return Constants.ERROR_NUMBER_BEFORE_LETTER
    }
    if (value.length == 3) {
      return value.substring(0, value.length - 1) + buttonText
    }
    return showMessageErrorOrInputText(value, value + buttonText)
  }

  handle2(): string {
    return '->q0'
  }

}
