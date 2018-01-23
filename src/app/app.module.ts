import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NgxLayerModule} from '../../index';
// import {LayerModule as NgxLayerModule} from './module/layer/layer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxLayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
