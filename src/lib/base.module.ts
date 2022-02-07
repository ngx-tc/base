import { NgModule } from '@angular/core';
import { BaseComponent } from './base.component';
import { ShapeDirective } from './directives/shape/shape.directive';



@NgModule({
  declarations: [
    BaseComponent,
    ShapeDirective
  ],
  imports: [
  ],
  exports: [
    BaseComponent,
    ShapeDirective
  ]
})
export class TcBaseModule { }
