import { Directive, ElementRef, Input, OnChanges } from "@angular/core";

@Directive({
    selector: '[appAttribute]'
})
export class AttributeDirective implements OnChanges{
    @Input()
    public appAttribute: object;

    constructor(private element: ElementRef<HTMLElement>) {}

    public ngOnChanges() {
        for (let key in this.appAttribute) {
            this.element.nativeElement.setAttribute(key, this.appAttribute[key]);
            // console.log(this.appAttribute);
        }
    }
}
