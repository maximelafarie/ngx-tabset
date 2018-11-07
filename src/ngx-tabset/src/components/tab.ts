import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'ngx-tab',
  template: `
    <div *ngIf="active"
         class="pane"
         [ngClass]="customPaneClass">
      <div *ngIf="bypassDOM">
        <ng-container [ngTemplateOutlet]="template"></ng-container>
      </div>
      <div *ngIf="!bypassDOM">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class TabComponent {
  @Input() public tabTitle: string;
  @Input() public active = false;
  @Input() public disabled = false;
  @Input() public bypassDOM = false;
  @Input() public customPaneClass: string = '';
  @ContentChild(TemplateRef) template: TemplateRef<any>;
}
