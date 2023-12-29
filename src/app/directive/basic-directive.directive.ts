import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBasicDirective]',
})
export class BasicDirectiveDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() selectedColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = this.selectedColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
