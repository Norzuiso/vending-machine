import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { NumPadComponent } from './num-pad/num-pad.component';
import { ShowTextComponent } from './show-text/show-text.component';
import {MatCardModule} from "@angular/material/card";
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NumPadComponent,
    ShowTextComponent,
    ProductComponent,

  ],
    imports: [
        BrowserModule,
        MatGridListModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
