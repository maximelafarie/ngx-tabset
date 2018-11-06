import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version = VERSION.full;

  public tabSelected(index: number): void {
    console.log('Tab ' + index + ' has been selected.');
  }
}
