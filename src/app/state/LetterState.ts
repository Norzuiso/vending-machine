import {State} from "./State";

export class LetterState extends State {
  //Esta función retorna el valor del boton de una letra que fue presionado
  handleClickedButton(value: string, buttonText: string): string {
    return buttonText
  }

  returnInitialState(): string {
    return ''
  }

}
