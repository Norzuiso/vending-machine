import {State} from "./State";
import {isValueWaitingMessage, showMessageErrorOrInputText} from "../Util";
import {Constants} from "../Constants";
import {Product} from "../Product";

export class EnterState extends State {
  handleClickedButton(value: string, buttonText: string): string {
    let product = new Product('', '').getDummyProduct()
    if (isValueWaitingMessage(value)){
      return Constants.ERROR_NO_VALUES + '/'+ this.handle2()
    }

    let existsProduct = product.find(e=> e.code === value) !== undefined;
    if (existsProduct){
      return showMessageErrorOrInputText(value, Constants.DELIVER_PRODUCT+' '+value + '/'+ this.handle2())
    }
    return showMessageErrorOrInputText(value, Constants.ERROR_PRODUCT_NO_EXIST + '/'+ this.handle2())
  }

  handle2(): string {
    return '->q0'
  }

}
