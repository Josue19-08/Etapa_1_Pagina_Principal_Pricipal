import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaResennaPage } from './pagina-resenna.page';

describe('PaginaResennaPage', () => {
  let component: PaginaResennaPage;
  let fixture: ComponentFixture<PaginaResennaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaResennaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
