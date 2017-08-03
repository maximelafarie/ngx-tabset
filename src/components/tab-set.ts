import {ContentChildren, Component, QueryList, Input, AfterContentInit, EventEmitter, Output} from "@angular/core";
import {TabComponent} from "./tab";
import {TabTranscludeDirective} from "./tab-transclude";

@Component({
    selector: "ngx-tabset",
    template: `
        <style>
            ul.tabset-header.tabset-style {
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
            }

            ul.tabset-header.tabset-style li {
                padding: 12px;
            }

            /* Optional style that can be disabled */
            ul.tabset-header.tabset-style li:hover {
                cursor: pointer;
                -moz-box-shadow: inset 0 -4px 0 0 lightgray;
                -webkit-box-shadow: inset 0 -4px 0 0 lightgray;
                box-shadow: inset 0 -4px 0 0 lightgray;
            }

            ul.tabset-header.tabset-style li.disabled {
                opacity: .4;
            }

            ul.tabset-header.tabset-style li.disabled:hover {
                -moz-box-shadow: none;
                -webkit-box-shadow: none;
                box-shadow: none;
                cursor: not-allowed;
            }

            ul.tabset-header.tabset-style li.active {
                -moz-box-shadow: inset 0 -4px 0 0 blue;
                -webkit-box-shadow: inset 0 -4px 0 0 blue;
                box-shadow: inset 0 -4px 0 0 blue;
            }

            .tabset-content {
            }
        </style>
        <nav>
            <ul class="tabset-header container"
                [ngClass]="{'tabset-style': !disableStyle}">
                <li role="presentation" *ngFor="let tab of tabs" [class.active]="tab.active"
                    [class.disabled]="tab.disabled" (click)="changeActiveTab(tab)">
                    <span [tabTransclude]="tab.headingTemplate">{{tab.title}}</span>
                </li>
            </ul>
        </nav>
        <div class="container">
            <div class="tabset-content">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class TabsetComponent implements AfterContentInit {
    @Input()
    public disableStyle: boolean;

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
