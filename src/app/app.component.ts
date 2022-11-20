import {Component} from '@angular/core';
import {Context} from "./state/Context";
import {DeleteState} from "./state/DeleteState";
import {Constants} from "./Constants";
import {Product} from "./Product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values: any = Constants.WAITING_MESSAGE_STATUS;
  context = new Context(new DeleteState());

  products = new Product('', '').getDummyProduct()

  clickedButton(text: string) {
    this.values = text;
  }
}
