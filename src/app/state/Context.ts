import {State} from "./State";
import {Type} from "@angular/core";

export class Context{

  private state: State ;

  constructor(state: State) {
    this.transitionTo(state);
  }

  public transitionTo(state: State): void {
    console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }
  public request1(value: string, buttonText: string): string {
    return this.state.handleClickedButton(value, buttonText);
  }

  public request2(): string {
    return this.state.handle2();
  }

}
