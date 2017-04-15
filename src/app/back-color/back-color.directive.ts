import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appBackColor]'
})
export class BackColorDirective {
  @Input() appBackColor: string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = this.appBackColor;
  }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
}
