import {Component} from '@angular/core';
import {Context} from "./state/Context";
import {DeleteState} from "./state/DeleteState";
import {Constants} from "./Constants";
import {Product} from "./Product";
import {delay} from "rxjs";
import {GlobalVariables} from "./global-variables.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values: any = Constants.WAITING_MESSAGE_STATUS;
  context = new Context(new DeleteState());

  products = new Product('', '').getDummyProduct()
  step: GlobalVariables = new GlobalVariables();


  //Esta función lee el texto del evento
  clickedButton(text: string) {
    //Si el ultimo evento registrado es q0 y no estamos en el inicio entonces volvemos al inicio
    if (this.step.step.slice(-2) == 'q0' && this.step.step != '>q0') {
      this.step.step = '>q0'
    }
    // Dividimos el texto por cada / que tengamos y si tenemos más de 3 elementos despues de la división agregaremos el estado inicial y posteriormente el estado actual
    let texts = text.split('/');
    this.values = texts[0];
    if (texts.length == 3) {
      this.step.step += texts[2];
    }
    this.step.step += texts[1];

  }
}
