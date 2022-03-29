import { TimerService } from './timer.service';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor (private timerService: TimerService) {}
  title = 'mapnote';

  public attributes = {name: 'value1'};
  public onClick() {
    this.attributes = {name: 'value2'};
  }

  public ngAfterViewInit() {
    this.timerService.start();
  }
}
