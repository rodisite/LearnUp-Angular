import { Inject, Injectable, InjectionToken } from '@angular/core';

export const DOCUMENT = new InjectionToken('__DOCUMENT__');
export const SET_INTERVAL = new InjectionToken('__SET_INTERVAL__');

@Injectable()
export class TimerService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(SET_INTERVAL) private setInterval: Function
  ) { }

  public start() {
    const timerOutputElement = this.document.querySelector('#timer-output');
    let counter: number = 0;

    this.setInterval(() => {
      timerOutputElement.innerHTML = `${counter++}`;
    }, 1000)
  }
}
