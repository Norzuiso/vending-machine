import {State} from "./State";
import {isValueWaitingMessage, showMessageErrorOrInputText} from "../Util";
import {Constants} from "../Constants";
import {Product} from "../Product";

export class EnterState extends State {
  handleClickedButton(value: string, buttonText: string): string {
    let product = new Product('', '').getDummyProduct()
    if (isValueWaitingMessage(value)){
      return Constants.ERROR_NO_VALUES
    }

    let existsProduct = product.find(e=> e.code === value) !== undefined;
    if (existsProduct){
      return showMessageErrorOrInputText(value, Constants.DELIVER_PRODUCT+' '+value)
    }
    return showMessageErrorOrInputText(value, Constants.ERROR_PRODUCT_NO_EXIST)
  }

  handle2(): string {
    return ''
  }

}
