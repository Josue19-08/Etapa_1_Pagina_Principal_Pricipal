import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaCuentaPage } from './pagina-cuenta.page';

describe('PaginaCuentaPage', () => {
  let component: PaginaCuentaPage;
  let fixture: ComponentFixture<PaginaCuentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
