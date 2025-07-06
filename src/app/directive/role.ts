import { AfterViewInit, Attribute, Directive, ElementRef, HostAttributeToken, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fontType]'
})
export class FontType  implements OnInit, AfterViewInit{

  private render : Renderer2 = inject(Renderer2);
  private el : ElementRef  = inject(ElementRef)
  public font :  string = inject(new HostAttributeToken('font'))

  constructor( ) { 
    console.log(this.font)
  }

  ngOnInit(): void {
     switch(this.font){
        case 'italic' : {
          this.render.setStyle(this.el.nativeElement ,'color','red');
           break;
        };
        case 'bold' : {
          this.render.setStyle(this.el.nativeElement ,'color','green');
           break;
        };
        case 'underline' : {
          this.render.setStyle(this.el.nativeElement ,'color','orange');
           break;
        };
        default : {
          console.log('font not provided')
        }
     }
  }

  ngAfterViewInit(): void {
    console.log('Before changing the attribute value : ',this.font);
    this.render.setAttribute(this.el.nativeElement,'font', 'some_random_value');
    console.warn('After changing the attribute value : ',this.font)
  }

}
