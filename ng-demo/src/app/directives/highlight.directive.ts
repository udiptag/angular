import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elref: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elref.nativeElement, 'background-color', '#ffe6e6', 0);
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elref.nativeElement, 'background-color', '#ffe6e6', 0);
    this.renderer.setStyle(this.elref.nativeElement, 'font-size', '20px', 0);
    this.renderer.setStyle(this.elref.nativeElement, 'font-variant', 'small-caps', 0);
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.removeStyle(this.elref.nativeElement, 'background-color');
    this.renderer.setStyle(this.elref.nativeElement, 'font-size', '12px', 0);
    this.renderer.removeStyle(this.elref.nativeElement, 'font-variant');
  }
}
