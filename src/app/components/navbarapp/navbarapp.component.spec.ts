import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarappComponent } from './navbarapp.component';

describe('NavbarappComponent', () => {
  let component: NavbarappComponent;
  let fixture: ComponentFixture<NavbarappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
