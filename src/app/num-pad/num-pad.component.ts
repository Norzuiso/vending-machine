import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Context} from "../state/Context";
import {DeleteState} from "../state/DeleteState";
import {NumPadValues} from "./num-pad-values";
import {Constants} from "../Constants";
import {LetterState} from "../state/LetterState";
import {EnterState} from "../state/EnterState";
import {NumberState} from "../state/NumberState";
import {GlobalVariables} from "../global-variables.service";

@Component({
  selector: 'app-num-pad',
  templateUrl: './num-pad.component.html',
  styleUrls: ['./num-pad.component.css']
})
export class NumPadComponent implements OnInit {

  @Output()
  textSelected = new EventEmitter<string>();
  @Input()
  values = Constants.WAITING_MESSAGE_STATUS;

  constructor() {
  }

  ngOnInit(): void {
  }


  colsValues = [
    new NumPadValues('A', new Context(new LetterState())),
    new NumPadValues('B', new Context(new LetterState())),
    new NumPadValues('C', new Context(new LetterState())),

    new NumPadValues('1', new Context(new NumberState())),
    new NumPadValues('2', new Context(new NumberState())),
    new NumPadValues('3', new Context(new NumberState())),

    new NumPadValues('4', new Context(new NumberState())),
    new NumPadValues('5', new Context(new NumberState())),
    new NumPadValues('6', new Context(new NumberState())),

    new NumPadValues('7', new Context(new NumberState())),
    new NumPadValues('8', new Context(new NumberState())),
    new NumPadValues('9', new Context(new NumberState())),

    new NumPadValues('Del', new Context(new DeleteState())),
    new NumPadValues('0', new Context(new NumberState())),
    new NumPadValues('Enter', new Context(new EnterState())),
  ]
  title = 'vending-machine';

  //Esta función retorna el texto del boton presionado y el nombre del evento en el que nos encontramos
  buttonClick(opt: string, s: string) {
    this.textSelected.emit(opt+'/'+s);
  }
}
