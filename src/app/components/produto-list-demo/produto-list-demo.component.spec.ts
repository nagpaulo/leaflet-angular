import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoListDemoComponent } from './produto-list-demo.component';

describe('ProdutoListDemoComponent', () => {
  let component: ProdutoListDemoComponent;
  let fixture: ComponentFixture<ProdutoListDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoListDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
