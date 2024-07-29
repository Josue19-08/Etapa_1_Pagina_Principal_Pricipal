import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaMenuPage } from './pagina-menu.page';

describe('PaginaMenuPage', () => {
  let component: PaginaMenuPage;
  let fixture: ComponentFixture<PaginaMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
