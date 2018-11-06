import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-tab',
  template: `
    <div *ngIf="active"
         class="pane"
         [ngClass]="customPaneClass">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
  @Input() public tabTitle!: string;
  @Input() public active = false;
  @Input() public disabled = false;
  @Input() public customPaneClass: string = '';

  constructor() {
    if (!this.tabTitle || this.tabTitle.length <= 0) {
      throw new Error('Tab instances should have a title. Please add tabTitle option on each <ngx-tab></ngx-tab> element.');
    }
  }
}
