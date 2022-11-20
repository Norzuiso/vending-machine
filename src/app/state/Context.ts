import {State} from "./State";
import {Type} from "@angular/core";
import {GlobalVariables} from "../global-variables.service";

export class Context{

  private state: State ;

  constructor(state: State) {
    this.transitionTo(state);
  }

  public transitionTo(state: State): void {
    let message = `Context: Transition to ${(<any>state).constructor.name}.`;
    console.log(message);
    this.state = state;
    this.state.setContext(this);
  }
  public request1(value: string, buttonText: string): string {
    return this.state.handleClickedButton(value, buttonText);
  }

  public request2(): string {
    let message = ` -> ${(<any>this.state).constructor.name}.`;
    return message;
  }

}
