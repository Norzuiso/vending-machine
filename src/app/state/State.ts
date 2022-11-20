import {Context} from "./Context";

export abstract class State{
  protected context: Context;

  public setContext(context: Context) {
    this.context = context;
  }

  public abstract handleClickedButton(value: string, buttonText: string): string;

  public abstract handle2(): string;
}
