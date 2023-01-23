import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDispensadoresComponent } from './menu-dispensadores.component';

describe('MenuDispensadoresComponent', () => {
  let component: MenuDispensadoresComponent;
  let fixture: ComponentFixture<MenuDispensadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDispensadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDispensadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
