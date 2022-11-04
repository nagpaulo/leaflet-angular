import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProdutoListDemoService } from './service/produto-list-demo.service';
import { Product } from './entity/product';

@Component({
  selector: 'app-produto-list-demo',
  templateUrl: './produto-list-demo.component.html',
  styleUrls: ['./produto-list-demo.component.scss']
})
export class ProdutoListDemoComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProdutoListDemoService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(products => this.products = products);
  }

  selectProduct(product: Product) {
      this.ref.close(product);
  }

}
