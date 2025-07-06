import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '<strong>'
})
export class ZoomIn {

  private _el : ElementRef = inject(ElementRef);
  private renderer : Renderer2 = inject(Renderer2);
  constructor( ) { }

  @HostListener('mouseover',['$event'])
  mouseOver(event: MouseEvent){ 
    this.renderer.addClass(this._el.nativeElement,'zoom')
  }

   @HostListener('mouseleave',['$event'])
  mouseLeave(event: MouseEvent){ 
    this.renderer.removeClass(this._el.nativeElement,'zoom')
  }

}
