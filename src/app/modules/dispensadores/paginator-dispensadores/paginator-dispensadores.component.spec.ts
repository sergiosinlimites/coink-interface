import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorDispensadoresComponent } from './paginator-dispensadores.component';

describe('PaginatorDispensadoresComponent', () => {
  let component: PaginatorDispensadoresComponent;
  let fixture: ComponentFixture<PaginatorDispensadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorDispensadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorDispensadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
