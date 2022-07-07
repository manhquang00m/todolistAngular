import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appTrim]',
})
export class TrimDirective {
  constructor(
    private elementRef: ElementRef,
    private ngModel: NgModel,
    private renderer: Renderer2
  ) {}
  @HostListener('blur')
  onblur() {
    let value = this.ngModel.model;
    value = value.trim();
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
  }
}
