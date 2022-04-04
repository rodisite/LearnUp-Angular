import { TimerService } from './timer.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DOCUMENT, SET_INTERVAL } from './timer.service'
import { CardComponent } from './card/card.component';
import { AttributeDirective } from './attribute.directive';
import { FormatNumberPipe } from './format-number.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatNumberPipe } from './format-number.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AttributeDirective,
    FormatNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TimerService,
    {
      provide: DOCUMENT,
      useValue: document
    },
    {
      provide: SET_INTERVAL,
      useValue: setInterval
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
