import {Component, Input, OnInit} from '@angular/core';
import {Constants} from "../Constants";

@Component({
  selector: 'app-show-text',
  templateUrl: './show-text.component.html',
  styleUrls: ['./show-text.component.css']
})
export class ShowTextComponent implements OnInit {
  esperando_text = Constants.WAITING_MESSAGE_STATUS;
  @Input() values: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
