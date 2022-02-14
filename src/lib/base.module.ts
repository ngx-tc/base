import { NgModule } from '@angular/core';

import { BaseComponent } from './base.component';
import { ShapeDirective } from './directives/shape/shape.directive';
import { ColorDirective } from './directives/color/color.directive';
import { BgColorDirective } from './directives/bg-color/bg-color.directive';
import { BorderColorDirective } from './directives/border-color/border-color.directive';
import { GradientDirective } from './directives/gradient/gradient.directive';

@NgModule({
  declarations: [
    BaseComponent,
    ShapeDirective,
    ColorDirective,
    BgColorDirective,
    BorderColorDirective,
    GradientDirective
  ],
  imports: [
  ],
  exports: [
    BaseComponent,
    ShapeDirective,
    ColorDirective,
    BgColorDirective,
    BorderColorDirective,
    GradientDirective
  ]
})
export class TcBaseModule { }
