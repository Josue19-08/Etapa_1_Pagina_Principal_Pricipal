import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaMeseroPage } from './pagina-mesero.page';

describe('PaginaMeseroPage', () => {
  let component: PaginaMeseroPage;
  let fixture: ComponentFixture<PaginaMeseroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMeseroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
