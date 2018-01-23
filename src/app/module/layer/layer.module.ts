import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayerComponent} from './layer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayerComponent],
  exports: [LayerComponent]
})
export class LayerModule {
}
