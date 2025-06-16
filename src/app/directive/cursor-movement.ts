import { Directive } from '@angular/core';

@Directive({
  selector: '[appCursorMovement]',
  host : {
   '(mousedown)': 'void handleMousedown($event)' 
  }
})
export class CursorMovement {

  constructor() { }

  handleMousedown(e:MouseEvent):boolean {
    console.log('mouse event',e)
    // e.preventDefault();
    // e.stopPropagation();
    return true
  }

}
