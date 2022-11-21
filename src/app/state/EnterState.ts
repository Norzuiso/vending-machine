import {State} from "./State";
import {isValueWaitingMessage, showMessageErrorOrInputText} from "../Util";
import {Constants} from "../Constants";
import {Product} from "../Product";

export class EnterState extends State {
  //Esta función realiza los procesos del estado enter
  handleClickedButton(value: string, buttonText: string): string {
    let product = new Product('', '').getDummyProduct()
    //Si el valor actual es Esperando... retorna el error Favor de ingresar un valor antes de continuar y retorna el estado final
    if (isValueWaitingMessage(value)){
      return Constants.ERROR_NO_VALUES + '/'+ this.returnInitialState()
    }

    let existsProduct = product.find(e=> e.code === value) !== undefined;
    //Verifica si el producto existe y si existe entonces retorna el mensajes Entregando producto más el codigo del producto y retorna el estado final
    if (existsProduct){
      return showMessageErrorOrInputText(value, Constants.DELIVER_PRODUCT+' '+value + '/'+ this.returnInitialState())
    }
    //El codigo del producto no existe entonces retorna el mensajes Favor de agregar un producto que exista y retorna el estado final
    return showMessageErrorOrInputText(value, Constants.ERROR_PRODUCT_NO_EXIST + '/'+ this.returnInitialState())
  }

  //esta función nos retorna el valor del estado final
  returnInitialState(): string {
    return '->q0'
  }

}
