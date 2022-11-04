import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaService } from './service/mapa.service';
import { HttpClientModule } from '@angular/common/http'
import { PopupService } from './service/popup.service';
import { ShapeService } from './service/shape.service';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { MapaComponent } from './mapa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ProdutoListDemoModule } from '../produto-list-demo/produto-list-demo.module';

@NgModule({
  declarations: [ MapaComponent ],
  imports: [
    DynamicDialogModule,
    ToastModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ProdutoListDemoModule,
    CommonModule
  ],
  exports: [ MapaComponent ],
  providers: [ MapaService, PopupService, ShapeService, MessageService, DialogService ]
})
export class MapaModule { }
