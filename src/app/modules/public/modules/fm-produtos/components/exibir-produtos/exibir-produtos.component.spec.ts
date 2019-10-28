import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirProdutosComponent } from './exibir-produtos.component';

describe('ExibirProdutosComponent', () => {
  let component: ExibirProdutosComponent;
  let fixture: ComponentFixture<ExibirProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
