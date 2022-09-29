import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[bold]'
})
export class BoldDirective {
    constructor(
        private element: ElementRef,
        private renderer: Renderer2
    ) {
        this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer")
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.setFontWeight("bold");
    }
    @HostListener("mouseleave") onMouseLeave() {
        this.setFontWeight("normal");
    } 

    setFontWeight(val: string) {
        this.renderer.setStyle(this.element.nativeElement,  "font-weight", val)
    }
}