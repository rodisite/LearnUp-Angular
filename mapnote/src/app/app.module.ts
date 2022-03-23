import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AttributeDirective } from './attribute.directive';
import { FormatNumberPipe } from './format-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AttributeDirective,
    FormatNumberPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
