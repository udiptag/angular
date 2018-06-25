import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlueBackground]'
})
export class BlueBackgroundDirective implements OnInit {

  ngOnInit(): void {
    this.renderer.setStyle(this.elref.nativeElement, 'background-color', '#e6f7ff', 0);
    this.renderer.setStyle(this.elref.nativeElement, 'font-variant', 'small-caps', 0);
  }

  constructor(private elref: ElementRef, private renderer: Renderer2) { }

}
