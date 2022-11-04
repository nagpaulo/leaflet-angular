import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListDemoComponent } from './produto-list-demo.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [ ProdutoListDemoComponent ],
  imports: [
    DynamicDialogModule,
    ToastModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [ ProdutoListDemoComponent ]
})
export class ProdutoListDemoModule { }
