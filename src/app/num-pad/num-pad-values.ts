import {Context} from "../state/Context";

export class NumPadValues {
  text: string
  context: Context

  constructor(text: string, context: Context) {
    this.text = text;
    this.context = context;
  }
}
