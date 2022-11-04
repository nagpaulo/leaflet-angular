import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaService } from './service/mapa.service';
import { HttpClientModule } from '@angular/common/http'
import { PopupService } from './service/popup.service';
import { ShapeService } from './service/shape.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [ MapaService, PopupService, ShapeService ]
})
export class MapaModule { }
