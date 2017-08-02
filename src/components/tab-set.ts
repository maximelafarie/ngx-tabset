import {ContentChildren, Component, QueryList, Input, AfterContentInit, EventEmitter, Output} from "@angular/core";
import {TabComponent} from "./tab";
import {TabTranscludeDirective} from "./tab-transclude";

@Component({
    selector: "ngx-tabset",
    template: `
        <style>
            .tabset {
            }

            ul.nav {
                list-style: none;
                margin: 0;
                padding: 0;
            }

            ul.nav li {
                display: inline-block;
                padding: 12px;
            }

            ul.nav li:hover {
                cursor: pointer;
                -moz-box-shadow: inset 0 -4px 0 0 lightgray;
                -webkit-box-shadow: inset 0 -4px 0 0 lightgray;
                box-shadow: inset 0 -4px 0 0 lightgray;
            }

            ul.nav li.disabled {
                opacity: .4;
            }

            ul.nav li.disabled:hover {
                box-shadow: none;
                cursor: not-allowed;
            }

            ul.nav li.active {
                -moz-box-shadow: inset 0 -4px 0 0 blue;
                -webkit-box-shadow: inset 0 -4px 0 0 blue;
                box-shadow: inset 0 -4px 0 0 blue;
            }

            .tabset-content {
            }
        </style>
        <div class="tabset">
            <ul class="nav" [ngClass]="{ 'nav-tabs': !pills, 'nav-pills': pills }">
                <li role="presentation" *ngFor="let tab of tabs" [class.active]="tab.active"
                    [class.disabled]="tab.disabled" (click)="changeActiveTab(tab)">
                    <a class="btn">
                        <span [tabTransclude]="tab.headingTemplate">{{tab.title}}</span>
                    </a>

                </li>
            </ul>
            <div class="tabset-content">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class TabsetComponent implements AfterContentInit {

    @Input()
    public pills: boolean;

    @ContentChildren(TabComponent)
    public tabs: QueryList<TabComponent>;

    @Output()
    public onSelect = new EventEmitter(false);

    public changeActiveTab(tab: TabComponent) {
        if (!tab.disabled) {
            const tabs = this.tabs.toArray();
            tabs.forEach((t) => t.active = false);
            tab.active = true;
            this.onSelect.emit(tabs.indexOf(tab));
        }
    }

    public ngAfterContentInit() {
        setTimeout(() => {
            const readTabs = this.tabs.toArray();
            const activeTab = readTabs.find((tab) => tab.active === true);
            if (!activeTab && readTabs.length > 0) {
                readTabs[0].active = true;
            }
        });
    }

}
