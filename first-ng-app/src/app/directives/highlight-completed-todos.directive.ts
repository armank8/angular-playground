import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodos]',
})
export class HighlightCompletedTodosDirective {
  icCompleted = input(false);
  el = inject(ElementRef);
  constructor() {}

  stylesEffect = effect(() => {
    if (this.icCompleted()) {
      this.el.nativeElement.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.nativeElement.style.backgroundColor = '#d3f9d8';
      this.el.nativeElement.nativeElement.style.color = '#6c757d';
    }else{
      this.el.nativeElement.style.textDecoration='none';
      this.el.nativeElement.style.textDecoration='#fff';
      this.el.nativeElement.style.textDecoration='#000';
    }
  });
}
