import { TestBed } from '@angular/core/testing';

import { ProdutoListDemoService } from './produto-list-demo.service';

describe('ProdutoListDemoService', () => {
  let service: ProdutoListDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoListDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
