import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[appInputClickEffect]',
  standalone: true
})
export class InputClickEffectDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('focus') onFocus() {
    this.renderer.addClass(this.el.nativeElement, 'focused'); // Add your CSS class name
  }

  @HostListener('blur') onBlur() {
    this.renderer.removeClass(this.el.nativeElement, 'focused'); // Remove your CSS class name
  }

}
