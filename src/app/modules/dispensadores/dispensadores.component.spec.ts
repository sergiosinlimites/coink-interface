import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensadoresComponent } from './dispensadores.component';

describe('DispensadoresComponent', () => {
  let component: DispensadoresComponent;
  let fixture: ComponentFixture<DispensadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispensadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispensadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
