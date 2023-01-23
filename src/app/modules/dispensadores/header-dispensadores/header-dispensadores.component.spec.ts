import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDispensadoresComponent } from './header-dispensadores.component';

describe('HeaderDispensadoresComponent', () => {
  let component: HeaderDispensadoresComponent;
  let fixture: ComponentFixture<HeaderDispensadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDispensadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDispensadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
