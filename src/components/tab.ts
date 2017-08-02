import {Component, Input, ContentChild, TemplateRef} from "@angular/core";
import {TabHeadingDirective} from "./tab-heading";

@Component({
    selector: "ngx-tab",
    template: `
        <ng-content *ngIf="active"></ng-content>
    `
})
export class TabComponent {

    @ContentChild(TabHeadingDirective)
    public heading: TabHeadingDirective;

    @Input()
    public title: string;

    @Input()
    public active = false;

    @Input()
    public disabled = false;

    get headingTemplate(): TemplateRef<any> | null {
        return this.heading ? this.heading.templateRef : null;
    }
}
