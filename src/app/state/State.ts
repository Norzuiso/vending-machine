import {Context} from "./Context";
import {GlobalVariables} from "../global-variables.service";

export abstract class State{
  protected context: Context;

  public setContext(context: Context) {
    this.context = context;
  }

  public abstract handleClickedButton(value: string, buttonText: string): string;

  public abstract returnInitialState(): string;
}
