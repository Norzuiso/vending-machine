import {State} from "./State";
import {Constants} from "../Constants";
import {showMessageErrorOrInputText} from "../Util";

export class NumberState extends State {
  //Esta función realiza los procesos del estado NumberState
  handleClickedButton(value: string, buttonText: string): string {
    //Si el valor actual es Esperando... entonces retornamos el error 'Favor de agregar una letra antes de un numero'
    if (value == Constants.WAITING_MESSAGE_STATUS) {
      return Constants.ERROR_NUMBER_BEFORE_LETTER
    }
    //Si la longitud del valor actual es igual a 3 entonces remplazamos el ultimo numero registrado por el texto del boton
    if (value.length == 3) {
      return value.substring(0, value.length - 1) + buttonText
    }
    //Returnamos el valor actual más el texto del boton a menos que el valor sea algún error, en ese caso retornamos el valor error actual
    return showMessageErrorOrInputText(value, value + buttonText)
  }

  returnInitialState(): string {
    return '->q0'
  }

}
