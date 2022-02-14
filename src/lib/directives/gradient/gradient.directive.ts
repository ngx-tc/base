import { Directive, OnInit, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[tcGradient]'
})
export class GradientDirective implements OnInit {
  @Input() tcGradient: string[];
  gradient: string;

  ngOnInit() {
    this.tcGradient.length >= 2 ? this.setGradient(this.tcGradient[0], this.tcGradient[1]) : null;
  }

  @HostBinding('style.backgroundImage') get getGradient() {
    return this.gradient;
  }
  @HostBinding('class') get class() {
    return 'custom-gradient';
  };

  setGradient(firstColor: string, secondColor: string) {
    this.gradient = `linear-gradient(to right, ${firstColor} 0%, ${secondColor} 100%)`;
  }
}
