import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: "[tabHeading]"
})
export class TabHeadingDirective {

  constructor(public templateRef: TemplateRef<any>) {
  }
}
