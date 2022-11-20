import {State} from "./State";

export class LetterState extends State {
  handleClickedButton(value: string, buttonText: string): string {
    if (value.length == 2) {
      return buttonText + value.substring(1,value.length)
    }
    return buttonText
  }

  handle2(): string {
    return ''
  }

}
