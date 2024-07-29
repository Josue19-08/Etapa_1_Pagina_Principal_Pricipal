import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaOrdenPage } from './pagina-orden.page';

describe('PaginaOrdenPage', () => {
  let component: PaginaOrdenPage;
  let fixture: ComponentFixture<PaginaOrdenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaOrdenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
