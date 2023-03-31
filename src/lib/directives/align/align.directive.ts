import { Directive, HostBinding, Input } from '@angular/core';
import { align } from '../../interfaces/general';

@Directive({
  selector: '[tcAlign]'
})
export class AlignDirective {
  @Input() tcAlign: align;
  @HostBinding('class.start-align') get leftAlign() { return this.tcAlign === align.start };
  @HostBinding('class.center-align') get centerAlign() { return this.tcAlign === align.center };
  @HostBinding('class.end-align') get rightAlign() { return this.tcAlign === align.end };
}
