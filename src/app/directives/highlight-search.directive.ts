import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightSearch]',
})
export class HighlightSearchDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'gray';
  }
}
