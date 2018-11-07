import { Component, ContentChildren, QueryList, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';

import { TabComponent } from './tab';

@Component({
  selector: 'ngx-tabset',
  template: `
    <ul class="nav-tabset"
        [class.disable-style]="disableStyle"
        [ngClass]="customNavClass">
      <li *ngFor="let tab of tabs"
          (click)="selectTab(tab)"
          class="nav-tab"
          [class.active]="tab.active"
          [class.disabled]="tab.disabled">
        <span>{{ tab.tabTitle }}</span>
      </li>
    </ul>
    <div class="tabs-container"
         [ngClass]="customTabsClass">
      <ng-content></ng-content>
    </div>
  `
})
export class TabsetComponent implements AfterContentInit {

  @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;

  @Input() public disableStyle = false;
  @Input() public customNavClass: string = '';
  @Input() public customTabsClass: string = '';

  @Output() public onSelect = new EventEmitter();

  // contentChildren are set
  public ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter((tab: TabComponent) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  public selectTab(tabToSelect: TabComponent): void {
    if (tabToSelect.disabled === true || tabToSelect.active === true) {
      return;
    }

    // deactivate all tabs
    this.tabs.toArray().forEach((tab: TabComponent) => tab.active = false);

    // activate the tab the user has clicked on.
    tabToSelect.active = true;
    this.onSelect.emit(this.tabs.toArray().indexOf(tabToSelect));
  }
}
