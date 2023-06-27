import { Directive, HostBinding, Input } from '@angular/core';
import { align } from '../../interfaces/general';

@Directive({
  selector: '[tcAlign]'
})
export class AlignDirective {
  @Input() tcAlign: align;
  @HostBinding('class.start-align') get startAlign() { return this.tcAlign === align.start };
  @HostBinding('class.center-align') get centerAlign() { return this.tcAlign === align.center };
  @HostBinding('class.end-align') get endAlign() { return this.tcAlign === align.end };
}
