import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mapnote';

  public attributes = {name: 'value1'};

  public onClick() {
    this.attributes = {name: 'value2'};
  }
}
